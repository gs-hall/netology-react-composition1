import React from "react";
import Card from "./Card";

export default function CardWithImage (props) {
  const imageElement = props.image ?
    <img src={props.image} className="card-img-top" alt={props.alt} /> :
    <div className="image-placeholder">
      <p>{props.imageCap}</p>
    </div>;  
  return (
    <Card {...props}>
      {imageElement}
    </Card>
  );
};