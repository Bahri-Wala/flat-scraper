import React, { useEffect, useState } from "react";
import Flat from "./Flat";
import { getAllFlats } from "../../services/flats";
import { IFlat } from "@interfaces/Flat.interface";
import "./flats.css";
import Pagination from "../layout/Pagination";
import Header from "../layout/Header";

const FlatList = () => {
  const [flats, setFlats] = useState(Array<IFlat>);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [flatsPerPage, setFlatsPerPage] = useState(20);
  const [currentFlats, setCurrentFlats] = useState(Array<IFlat>);
  const [filteredFlats, setFilteredFlats] = useState(Array<IFlat>);

  const getFlats = async () => {
    try {
      const data = await (await getAllFlats()).data;
      setFlats(data);
      setFilteredFlats(data);
    } catch (e) {
      return e;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFlats();
  }, []);

  useEffect(() => {
    const indexOfLastFlat = currentPage * flatsPerPage;
    const indexOfFirstFlat = indexOfLastFlat - flatsPerPage;
    if (filteredFlats.length > 0) {
      setCurrentFlats(filteredFlats.slice(indexOfFirstFlat, indexOfLastFlat));
    }
  }, [filteredFlats, currentPage, flatsPerPage]);

  return (
    <>
      <Header
        flats={flats}
        setFlatsPerPage={setFlatsPerPage}
        setFilteredFlats={setFilteredFlats}
        setCurrentPage={setCurrentPage}
      />
      {filteredFlats && filteredFlats.length > 0 ? (
        <>
          <div className="flats_container">
            {loading ? (
              <div>Fetching flats...</div>
            ) : (
              <>
                {currentFlats.map((flat) => (
                  <Flat title={flat.title} image={flat.image} />
                ))}
              </>
            )}
          </div>
          <Pagination
            flatsPerPage={flatsPerPage}
            totalFlats={filteredFlats.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div className="not-found">No Flats found!!</div>
      )}
    </>
  );
};

export default FlatList;
