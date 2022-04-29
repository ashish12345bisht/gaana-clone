import React from "react";
import Card from "./Card";
import "../styles/Grid.css";

function Grid({ name, img }) {
  return (
    <div className="new__songs__container">
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
      <Card name={name} img={img} />
    </div>
  );
}

export default Grid;
