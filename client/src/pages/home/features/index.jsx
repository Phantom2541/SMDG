import React, { useState } from "react";
import { MDBIcon, MDBMask } from "mdbreact";
import { School } from "../../../services/fakeDb";
import "./index.css";

const CardVer2 = ({ feature }) => {
  return (
    <div className="feature-cardv2">
      <div className="feature-wrapper">
        <div className="feature-box"></div>
        <MDBIcon className="feature-icon" icon="user" />
      </div>
      <div className="feature-title">User's Content</div>
      <div className="feature-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea a,
        voluptas, eveniet aliquid libero labore accusamus, maiores commodi
        dolores eligendi sunt? Rem dicta nemo reprehenderit expedita recusandae
        rerum consequuntur aliquid?
      </div>
    </div>
  );
};
const Card = ({ feature }) => {
  const [didHover, setDidhover] = useState(false),
    [isHovered, setIsHovered] = useState(false);

  const { icon, title, description } = feature;

  return (
    <div
      className={`landpage-card ${isHovered ? "landpage-card-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onMouseOver={() => setDidhover(true)}
        onMouseOut={() => setDidhover(false)}
      >
        <div
          style={{
            margin: "auto",
            width: "100px",
            height: "100px",
            border: didHover && "solid 7.5px #4285F4",
            transform: `rotate(${didHover ? "225deg" : "0deg"})`,
            display: "grid",
            placeItems: "center",
            transition: "all 1s",
          }}
        >
          <MDBIcon
            icon={icon}
            size="4x"
            style={{
              transform: `rotate(${didHover ? "-225deg" : "0deg"})`,
              //   transform: "rotate(-45deg)",
              color: didHover ? "#4285F4" : "black",
              transition: "all 1s",
            }}
          />
        </div>
        <h5 className="font-weight-bold">{title}</h5>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Features() {
  const styles = {
    container: {
      position: "absolute",
      minWidth: "650px",
      width: "100%",
      top: "90vh",
      left: 0,
      height: "800px",
      clipPath: "polygon(65% 0, 100% 15%, 100% 100%, 0 100%, 0 10%)",
      // backgroundColor: "#0081C9",
      background:
        "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 15%, #0081C9 50%)",
    },
    palong: {
      minWidth: "650px",
      zIndex: "1",
      position: "absolute",
      width: "100%",
      height: "6%",
      top: "90vh",
      left: 0,
      clipPath: "polygon(65% 0%, 65% 0, 55% 100%, 14% 71%)",
      backgroundColor: "#FFC436",
    },
    imahe: {
      backgroundImage: `url(${School.logo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "650px 650px",
      position: "absolute",
      minWidth: "650px",
      width: "100%",
      top: "80vh",
      left: 0,
      height: "800px",
      filter: "blur(3.5px)",
    },
  };

  return (
    <section id="features">
      <div style={styles.imahe} />
      <div style={styles.palong} />
      <div style={styles.container}>
        <br />
        <br />
        <br />
        <CardVer2 />
        <br />
        {/* <Card
          feature={{
            title: "Hello World",
            icon: "user",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur hic odio beatae iure perferendis id quibusdam, accusantium, facere, cumque voluptatibus laborum velit animi pariatur eos illum esse voluptatum sunt delectus!",
          }}
        /> */}
      </div>
    </section>
  );
}
