import React from "react";
import { IFlat } from "@interfaces/Flat.interface";

const Flat = ({ title, image }: IFlat) => {
  return (
    <div className="flat_card">
      <div className="card_img">
        <img src={image} />
      </div>
      <div className="card_title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Flat;
