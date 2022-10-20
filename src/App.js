import React from "react";
import Card from "./Card";
import CardWithImage from "./CardWithImage";

function App() {
  return (
    <>
      <CardWithImage
        image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        imageCap="Image Cap"
        alt="image"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
        linkText="Go somewhere"
        />
      <CardWithImage
        imageCap="Image Cap"
        alt="image"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
        linkText="Go somewhere"
        />        
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
        linkText="Go somewhere"
        />        
    </>
  );
}

export default App;
