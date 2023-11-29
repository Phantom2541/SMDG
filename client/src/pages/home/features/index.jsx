import React from "react";
import { MDBIcon } from "mdbreact";
import { School } from "../../../services/fakeDb";
import "./styles/card.css";
import "./styles/container.css";

const features = [
  {
    icon: "heart",
    title: "Wellness Programs",
    content:
      "Wellness initiatives promoting physical and mental health among students and staff.",
  },
  {
    icon: "book",
    title: "Academic Programs",
    content:
      "A wide range of academic programs designed to foster intellectual growth and development among students.",
  },
  {
    icon: "graduation-cap",
    title: "Extracurricular Activities",
    content:
      "A variety of extracurricular activities such as sports, clubs, and arts programs to enhance student engagement.",
  },
  {
    icon: "hands-helping",
    title: "Supportive Environment",
    content:
      "A supportive and inclusive environment that fosters student growth and success.",
  },
];

const Card = ({ feature }) => {
  const { icon, title, content } = feature;
  return (
    <div className="feature-card">
      <div className="feature-lineleft"></div>
      <div className="feature-lineright"></div>
      <div className="feature-linetop"></div>
      <div className="feature-linebottom"></div>
      <div className="feature-wrapper">
        <div className="feature-box"></div>
        <MDBIcon className="feature-icon" icon={`${icon}`} />
      </div>
      <div className="feature-title">{title}</div>
      <div className="feature-content">{content}</div>
    </div>
  );
};

export default function Features() {
  const styles = {
    container: {
      position: "absolute",
      minWidth: "650px",
      width: "100%",
      top: "80vh",
      left: 0,
      // height: "700px",
      minHeight: "700px",
      clipPath: "polygon(65% 0, 100% 15%, 100% 100%, 0 100%, 0 10%)",
      // backgroundColor: "#0081C9",
      background:
        "radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 15%, #0081C9 50%)",
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
      height: "700px",
      filter: "blur(3.5px)",
    },
  };

  return (
    <section id="features">
      <div style={styles.imahe} />
      <div className="palong" />
      <div style={styles.container}>
        <br />
        <br />
        <br />
        <div
          style={{
            width: "750px",
            margin: "60px auto",
            textAlign: "center",
          }}
        >
          <p className="feature-head">Features</p>
          <p style={{ fontSize: "20px" }}>
            Schools may employ various teaching methodologies, such as
            traditional lecture-style teaching, experiential learning,
            project-based learning, flipped classrooms, or Montessori methods,
            among others.
          </p>
        </div>
        <div className="feature-container">
          {features?.map((feature) => (
            <Card key={feature.icon} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
