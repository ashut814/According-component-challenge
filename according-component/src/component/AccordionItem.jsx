import React, { useState } from "react";
import "../App.css";
const AccordionItem = ({ num, title, children, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  function handleToggle() {
    console.log(num === curOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
