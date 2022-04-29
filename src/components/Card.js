import React from "react";
import "../styles/SwiperContainer.css";

function Card({ img, name }) {
  return (
    <div style={{ width: "200px" }}>
      <img className="swiper-image" src={img} />
      <h4>{name}</h4>
    </div>
  );
}

export default Card;
