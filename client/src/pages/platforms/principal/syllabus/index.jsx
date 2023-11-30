import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
} from "mdbreact";
import "./style/card.css";

export default function Syllabus() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardTitle className="ml-3 mt-4">Subjects</MDBCardTitle>
                <MDBCardBody>
                  <ul class="list-group list-group-light list-group-small">
                    <li class="list-group-item">
                      Oral communication on Context
                    </li>
                    <li class="list-group-item">
                      English Language or Literature
                    </li>
                    <li class="list-group-item">
                      Science (Physics, Chemistry, Biology)
                    </li>
                    <li class="list-group-item">
                      Social Studies or Social Sciences (History, Geography,
                      Civics)
                    </li>
                    <li class="list-group-item">
                      Foreign Languages (Spanish, French, German, etc.)
                    </li>
                  </ul>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="mb-3 shadow-box-example hoverable">
                <MDBCollapseHeader className="bg-white" onClick={toggle}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Grade 11</span>
                    <MDBIcon
                      icon="angle-down"
                      rotate={isOpen ? "0" : "90"}
                      style={{
                        transition: "all 0.5s",
                      }}
                    />
                  </div>
                </MDBCollapseHeader>
                <MDBCollapse isOpen={isOpen}>
                  <MDBCardBody>
                    <div style={{ display: "block" }} className="ml-4">
                      <MDBRow className="mb-2">
                        <div className="core">CORE SUBJECTS</div>
                        <MDBCol className="font-weight-bold text-center">
                          1st Semester
                        </MDBCol>
                        <MDBCol className="font-weight-bold text-center">
                          2nd Semester
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="6">
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              Oral communication on Context
                            </li>
                            <li class="list-group-item">
                              English Language or Literature
                            </li>
                            <li class="list-group-item">
                              Science (Physics, Chemistry, Biology)
                            </li>
                            <li class="list-group-item">
                              Social Studies or Social Sciences (History,
                              Geography, Civics)
                            </li>
                            <li class="list-group-item">
                              Foreign Languages (Spanish, French, German, etc.)
                            </li>
                          </ul>
                        </MDBCol>
                        <MDBCol md="6">
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              Oral communication on Context
                            </li>
                            <li class="list-group-item">
                              English Language or Literature
                            </li>
                            <li class="list-group-item">
                              Science (Physics, Chemistry, Biology)
                            </li>
                            <li class="list-group-item">
                              Social Studies or Social Sciences (History,
                              Geography, Civics)
                            </li>
                            <li class="list-group-item">
                              Foreign Languages (Spanish, French, German, etc.)
                            </li>
                          </ul>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div className="ml-4 mt-3">
                      <MDBRow>
                        <div className="contextualized">
                          CONTEXTUALIZED SUBJECT
                        </div>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              empowerment technologies
                            </li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                          </ul>
                        </MDBCol>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              Oral communication on Context
                            </li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                          </ul>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div className="ml-4 mt-3">
                      <MDBRow>
                        <div className="specialization">
                          SPECIALIZATION SUBJECT
                        </div>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              empowerment technologies
                            </li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                          </ul>
                        </MDBCol>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">
                              Oral communication on Context
                            </li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                          </ul>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div className="ml-4 mt-3">
                      <MDBRow>
                        <div className="hours-per-day">HOURS PER DAY</div>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">6.6</li>
                          </ul>
                        </MDBCol>
                        <MDBCol>
                          <ul class="list-group list-group-light list-group-small">
                            <li class="list-group-item">6.6</li>
                          </ul>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
