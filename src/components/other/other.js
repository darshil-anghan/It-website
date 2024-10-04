import React from "react";
import CountUp from "react-countup";
import { Link } from 'react-scroll';
import meeting from "../../assets/webex-chat.avif";
import "./other.css";

const scrollTodown = () => {
  window.scrollTo({
    top: 10000,
    behavior: 'smooth',
  });
};

function Other() {
  return (
    <>
      <div className="other animate-on-scroll-left">
        <h3 className="tex">Why Choose Us?</h3>
        <h4 className="Tex">
          We provide excellent software development services to make innovative
          applications/development services as <br></br>per your need which
          gives you a competitive edge.
        </h4>
      </div>
      <div className="other1">
        <div className="Others">
          <img className="img55 animate-on-scroll-top" src={meeting} alt="Example" />
        </div>
        <div className="Others1 animate-on-scroll-bottom">
          <p className="tex1">
            We have highly skilled engineers with excellent technical knowledge
            and experience in using latest software standards, tools, platforms,
            frameworks and technologies and we invest continuously in training
            and education, to be able to respond to any new technology
            challenges and demands from our clients.
          </p>
          <p className="tex1">
            We have a proven track of great success stories, we work with
            clients ranging from Fortune 500 to Forbes 50 and we can offer
            excellent software development opportunities for your business.
          </p>
          <div className="dimond">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
              fill="#f50fd6"
            >
              <path d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z" />
            </svg>

            <h3 className="texe">
              Dedicated, passionate and experienced employees
            </h3>
          </div>
          <div>
            <div className="Texe">
             <b className="hhs">-</b>We have a team of personnel who work with the same goal in mind.
            </div>
          </div>

          <div className="dimond">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 640 512"
              fill="#f5a905"
            >
              <path d="M256 0H576c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H552c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128h96V384v32c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V384H512v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V312c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H72zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H424c-8.8 0-16 7.2-16 16z" />
            </svg>

            <h3 className="texe">Business Identity</h3>
          </div>
          <div>
            <div className="Texe">
            <b className="hhs">-</b>We help to position you better in your business fraternity, walk
              away with confidence, experience the difference.
            </div>
          </div>

          <div className="dimond">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 640 512"
              fill="#2669df"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
            </svg>

            <h3 className="texe">Excellence in leveraging new technologies</h3>
          </div>
          <div>
            <div className="Texe">
            <b className="hhs">-</b> Up-gradation of technology is inevitable and we prefer to be
              up-to-date regarding the same and develop.
            </div>
          </div>

          <div className="dimond">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              fill="#226cec"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
            </svg>

            <h3 className="texe">Strong partnership with industry experts</h3>
          </div>
          <div>
            <div className="Texe">
            <b className="hhs">-</b>We understand the importance of a mix of knowledge and experience.
            </div>
          </div>
        </div>
      </div>
      <div className="counter animate-on-scroll-left">
        <div className="counte">
          <CountUp start={0} end={9} duration={3} />
          <p className="l">Clients</p>
        </div>
        <div className="counte">
          <CountUp start={0} end={25} duration={3} />
          <p className="l">Projects</p>
        </div>
        <div className="counte">
          <CountUp start={0} end={3800} duration={3} />
          <p className="l">Hours Of Support</p>
        </div>
        <div className="counte">
          <CountUp start={0} end={10} duration={3} />
          <p className="l">Hard Workers</p>
        </div>
      </div>
      <div className="re">
        <h3 className="toc animate-on-scroll-top">GET IN TOUCH</h3>
        <h4 className="Toc animate-on-scroll-top">
          Have any questions? Reach out to us from our contact form and we will
          get back to you shortly.
        </h4>
        <div className="Re">
          <div class="wrapper animate-on-scroll-top">
          <Link onClick={scrollTodown} className="battan qwqw">
        <span>START A PROJECT WITH US</span>
      </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Other;
