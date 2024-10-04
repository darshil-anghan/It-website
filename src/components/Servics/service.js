import React from 'react'
import webdevlopment from "../../assets/Webdevlopmentimg.svg";
import appdevlopment from "../../assets/appdevlopmentimg.svg";
import uiuxdesigener from "../../assets/Ui-Uxdesigenimg.webp";
import hosting from "../../assets/Hostingimg.webp";
import gamedevlopment from "../../assets/gamedevlopment.png";
import './service.css';

function Service() {
  return (
    <div className="servi"  id='service'>
    <h3 className="service underline-style"> Services </h3>
    <h4 className="slogan">The full service we are offering is specifically<br></br> designed to meet your business needs.</h4>
    <div className="container3 ">
      <div class="Box animate-on-scroll-top">
        <img
          className="img4"
          src={webdevlopment}
          alt="webdevlopment"
          height={100}
          width={150}
        />
        <div className="text11">Web Development</div>
        <p className="Text11">
        Best website design and development,<br></br> responsive web design services<br></br> at affordable price without <br></br>compromising in quality.
        </p>
      </div>
      <div class="Box animate-on-scroll-top">
        <img
          className="img4"
          src={appdevlopment}
          alt="Mobile App Development"
          height={100}
          width={150}
        />
        <div className="text11">Mobile App Development</div>
        <p className="Text11">
        Grow your business with your <br></br>mobile app. Tryon Valora Infotech will <br></br>help you to achieve your <br></br>business goals.
        </p>
      </div>
      <div class="Box animate-on-scroll-top">
        <img
          className="img4"
          src={hosting}
          alt="hosting"
          height={100}
          width={150}
        />
        <div className="text11">Hosting</div>
        <p className="Text11">
        We provide Web hosting at a very <br></br> affordable price. We provide Web <br></br>Hosting for small static websites<br></br> to big dynamic portals.
        </p>
      </div>
    
      <div class="Box animate-on-scroll-top">
        <img
          className="img4"
          src={uiuxdesigener}
          alt="uiuxdesigener"
          height={100}
          width={150}
        />
        <div className="text11">UI/UX Design</div>
        <p className="Text11">
        We are a team of dedicated UI UX <br></br>Designer who believes in building<br></br> world-class design for your web <br></br>and mobile application.
        </p>
      </div>
      <div class="Box animate-on-scroll-top">
        <img
          className="img4"
          src={gamedevlopment}
          alt="gamedevlopment"
          height={100}
          width={120}
        />
        <div className="text11">Game Development</div>
        <p className="Text11">
        We create intuitive gaming apps that<br></br> have the true potential to be the next <br></br>craze of this era. With us, you can deliver<br></br> immersive and engaging games to your users.
        </p>
      </div>
      </div>
  </div>
  )
}

export default Service;