import React, { Dispatch, SetStateAction, useState } from "react";
import "./header.css"; // Import your CSS file
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IFlat } from "@interfaces/Flat.interface";

interface IHeaderProps {
  flats: Array<IFlat>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setFlatsPerPage: Dispatch<SetStateAction<number>>;
  setFilteredFlats: Dispatch<SetStateAction<Array<IFlat>>>;
}

const Header = ({
  flats,
  setFlatsPerPage,
  setFilteredFlats,
  setCurrentPage,
}: IHeaderProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleFlatsPerPageChange = (event: any) => {
    setFlatsPerPage(Number(event.target.value));
  };

  const handleSearch = (event: any) => {
    setSearchText(event.target.value);
    const filterFlats =
      event.target.value.length > 0
        ? flats.filter((flat) =>
            flat.title.toUpperCase().includes(event.target.value.toUpperCase())
          )
        : flats;
    console.log(filterFlats);
    setFilteredFlats(filterFlats as Array<IFlat>);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="data:image/jpeg;base64,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1MqenifOgyWxdodvEJMaScgjrgjz8P7a42rtWKBcuTk9FHMn/Hiaxe7l/HDZq8jYBdhyGeZPl5CujbFxGl2ssyl4zGDHgZGfYSM9SfeKDKbI20Zmx2LouMhj0PvwP415bvelUdkWJ20EgkcuanB93I11T75xYOiNyftYA95BNeRNrJMMz3JjB/o4kYfF8HNBntjbajuM6QQy9QfA94I5EVk6jmyNpWUbaIQ2WwM6GJPt5ZqR0ClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUCuCa4Ycq87bOjPrIG++S/72aDpuNtQpy7QM31U9M/Bc499YjatvPd6VWLs41OdUvJjyx6oyR/jpUjSJVGFAA8AMV2UEduN0kZY1EhGgEE4zqy2rPXlzJpFubAOryH3gfwqRUoMQu7VsAB2ecd5Y595zXdFsG3XpCnvGr9ayNKDpjtkUYVFA8gBX1JErDDKCPAjP612UoOtYwOgAwMDHLl4VyygjBGQfGvulB1diurVpGrGM45464z4V20pQeNNmwhOz7NdGdWkjIye/nXbcWqONLorDwIz/AMq76UHkGzoghQRppPVdIwa6f/4Ft/oU+FZGlB57ezjj9RFX7oAr0UpQKUpQf//Z"
            alt="Logo"
          />
        </div>
        <div className="title">Flat Scraping</div>
        <div className="dropdown">
          <label>Flats per page:</label>
          <select onChange={handleFlatsPerPageChange}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className="search-label">Find the flat you are looking for</h3>
        <Paper component="form" className="search-bar">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            value={searchText}
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearch}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </>
  );
};

export default Header;
