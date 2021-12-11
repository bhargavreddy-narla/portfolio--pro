import * as React from "react";
//import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Homebody1 from "./Homebody1/Homebody1";
import Homebody2 from "./Homebody2/Homebody2";
import Homebody3 from "./Homebody3/Homebody3";
import Homebody4 from "./Homebody4/Homebody4";
import Homebody6 from "./Homebody6/Homebody6";
import Homebody7 from "./Homebody7/Homebody7";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homebody1 />
      <Homebody2 />
      <Homebody3 />
      <Homebody4 />
      <Homebody6 />
      <Homebody7 />
      <Footer />
    </div>
  );
}

export default App;
