import React from "react";
import "./HomebodyCards1.scss";
import HomebodyCards2 from "./HomebodyCards2";
import HomebodyCards3 from "./HomebodyCards3";

const HomebodyCards1 = () => {
  return (
    <div className="homebody--Cards">
      <HomebodyCards2 content={HomebodyCards3[0]} />
      <HomebodyCards2 content={HomebodyCards3[1]} />
      <HomebodyCards2 content={HomebodyCards3[2]} />
    </div>
  );
};

export default HomebodyCards1;
