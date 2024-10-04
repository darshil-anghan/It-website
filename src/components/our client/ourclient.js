import React from "react";
import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-5.png";
import client6 from "../../assets/client-6.png";
import Marquee from "react-fast-marquee";
import './ourclient.css';

function Ourclient() {
  const screenWidth = window.innerWidth;

  let gradientWidth = 700;

  if (screenWidth <= 900 && screenWidth > 400) {
    gradientWidth = 150;
  } else if (screenWidth <= 400) {
    gradientWidth = 100;
  }

  return (
    <div className="kk">
      <h3 className="tt animate-on-scroll-left">Our Client</h3>
      <Marquee
        className="scroll-container1"
        pauseOnHover={true}
        gradient={true}
        autoFill={true}
        gradientWidthFactor={gradientWidth} 
        gradientColor={[225, 237, 255]}
      >
            
            <div className="ani">
            <img
              src={client1}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={client2}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={client3}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={client4}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={client5}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={client6}
              alt="Example"
              className="img15"
              height={150}
              width={150}
            />
            </div>
       
      </Marquee> 
</div>
)

}

export default Ourclient;

 