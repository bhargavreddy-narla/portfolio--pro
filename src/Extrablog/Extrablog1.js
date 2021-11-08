import React from "react";
import "./Extrablog1.scss";
import Extrablog2 from "./Extrablog2";
import Extrablog3 from "./Extrablog3";
import Grid from "@mui/material/Grid";
const Extrablog1 = () => {
  return (
    <div className="extrablog--Cards">
          <Extrablog2 content={Extrablog3[0]} />
          <Extrablog2 content={Extrablog3[1]} />
          <Extrablog2 content={Extrablog3[2]} />
    </div>
  );
};

export default Extrablog1;
