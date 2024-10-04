import React from "react";
import "../../App.css";
import Blognav from "./blognav/blognav";
import Mainsaction from "./mainsa/mainsaction";
import Foter from "./blognav/footer";

function blog() {
  return (
    <div className="App">
      <Blognav />
      <Mainsaction />
      <Foter />
    </div>
  );
}

export default blog;
