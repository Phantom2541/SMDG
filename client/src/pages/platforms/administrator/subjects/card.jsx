import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBCollapseHeader,
  MDBIcon,
} from "mdbreact";
import { SubjectForm } from "./modal";

export default function Card({ subject, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false),
    [editState, setEditState] = useState(false),
    [form, setForm] = useState(subject);

  useEffect(() => {
    setIsOpen(Math.random() < 0.5);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    console.log("final submit", form);
  };

  const { title, isMajor, units, _id, description, lab, lec } = subject,
    color = isMajor ? "indigo" : "blue-grey",
    badgeTitle = isMajor ? `Laboratory: ${lab} UNITS, Lecture: ${lec}` : units;

  return (
    <MDBCard className="mb-3 shadow-box-example hoverable">
      <MDBCollapseHeader onClick={toggle}>
        <div className="d-flex justify-content-between align-items-center">
          {/* <MDBBadge color="indigo" className="mb-0 z-depth-0">
            MAJOR
          </MDBBadge> */}
          <div title={`${badgeTitle} UNITS`}>
            <MDBBadge color={color} className="mb-0 z-depth-0 mr-1">
              {isMajor ? "MAJOR" : "MINOR"}
            </MDBBadge>
            <MDBBadge color={color} className="mb-0 z-depth-0">
              {units} UNITS
            </MDBBadge>
          </div>

          <MDBIcon
            icon="angle-down"
            rotate={isOpen ? "0" : "90"}
            style={{
              transition: "all 0.5s",
            }}
          />
        </div>
        {title}
      </MDBCollapseHeader>
      <MDBCollapse id={_id} isOpen={isOpen}>
        <MDBCardBody>
          {editState ? (
            <SubjectForm
              handleFinalSubmit={handleSubmit}
              form={form}
              setForm={setForm}
              submitSize="sm"
              handleCancel={() => setEditState(false)}
            />
          ) : (
            <>
              {description}
              <MDBBtnGroup className="w-100">
                <MDBBtn
                  onClick={() => setEditState(true)}
                  title="Update"
                  className="p-1"
                  color="info"
                >
                  <MDBIcon icon="pen" />
                </MDBBtn>
                <MDBBtn
                  onClick={() => handleDelete(_id)}
                  title="Delete"
                  className="p-1"
                  color="danger"
                >
                  <MDBIcon icon="trash" />
                </MDBBtn>
              </MDBBtnGroup>
            </>
          )}
        </MDBCardBody>
      </MDBCollapse>
    </MDBCard>
  );
}
