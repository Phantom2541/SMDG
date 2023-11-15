import React from "react";
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

const grades = [
  "Elementary Grade 1",
  "Elementary Grade 2",
  "Elementary Grade 3",
  "Elementary Grade 4",
  "Elementary Grade 5",
  "Elementary Grade 6",
  "Junior High shool Grade 7",
  "Junior High shool Grade 8",
  "Junior High shool Grade 9",
  "Junior High shool Grade 10",
  "Senior High shool Grade 11",
  "Senior High school Grade 12",
];

export default function Learners() {
  return (
    <form>
      <select className="form-control">
        {grades.map((grade) => (
          <option value={grade} key={grade}>
            {grade}
          </option>
        ))}
      </select>
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
