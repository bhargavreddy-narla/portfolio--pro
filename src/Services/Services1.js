import React from "react";
import "./Services1.scss";
import Services2 from "./Services2";
import Services3 from "./Services3";
const Services1 = () => {
  return (
    <div className="services">
      <div className="services--Cards">
        <Services2 content={Services3[0]} />
        <Services2 content={Services3[1]} />
        <Services2 content={Services3[2]} />
      </div>
      <div className="services--Cards">
        <Services2 content={Services3[2]} />
        <Services2 content={Services3[1]} />
        <Services2 content={Services3[0]} />
      </div>
    </div>
  );
};

export default Services1;
