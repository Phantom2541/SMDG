import React, { useState } from "react";
import { MDBIcon, MDBMask } from "mdbreact";
import { School } from "../../../services/fakeDb";
import "./featureDesign/featureCard.css";

const Card = () => {
  return (
    <div className="feature-card">
      <div className="feature-lineleft"></div>
      <div className="feature-lineright"></div>
      <div className="feature-linetop"></div>
      <div className="feature-linebottom"></div>
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

export default function Features() {
  const styles = {
    container: {
      position: "absolute",
      minWidth: "650px",
      width: "100%",
      top: "85vh",
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
      top: "85vh",
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
        <Card />
        <br />
      </div>
    </section>
  );
}
