import React from "react";
import "./main.css";

export default function Card ({title, text, link, linkText, children}) {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn-primary">{linkText}</a>
      </div>
    </div>
  );
};