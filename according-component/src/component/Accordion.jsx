import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "../App.css";

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem 
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={faq.title} 
        num={index} 
        key={faq.title}>
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
