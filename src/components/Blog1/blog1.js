import React from "react";
import "../../App.css";
import Teamnav from "../Blog1/termnav/termnav";
import Mainterm from "../Blog1/mainterm/mainterm";
import Termfoter from "./termnav/termfoter";

function blog1() {
  return (
    <div className="App">
        <Teamnav />
      <Mainterm />
<Termfoter />
    </div>
  );
}

export default blog1;
