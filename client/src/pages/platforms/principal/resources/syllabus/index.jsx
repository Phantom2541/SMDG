import React, { useState } from "react";
import { whiteSpace } from "../../../../../services/utilities";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";

export default function DND() {
  const [listItems, setListItems] = useState([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" },
      { id: 5, name: "Item 5" },
    ]),
    [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [tableItems, setTableItems] = useState([
    { id: 6, name: "Initial Item" }, // Add an initial item here
  ]);

  const handleDragStart = (e, item, source) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ item, source }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const { item, source } = JSON.parse(data);

    if (source === "list") {
      // Add the dragged item to the tableItems
      setTableItems((prevItems) => [...prevItems, item]);

      // Remove the dragged item from listItems
      setListItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    } else if (source === "table") {
      // Add the dragged item to the listItems
      setListItems((prevItems) => [...prevItems, item]);

      // Remove the dragged item from tableItems
      setTableItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody>
              <h3>Subjects</h3>
              <hr />
              <ul
                className="list-group ml-3"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
              >
                {listItems.map((item) => (
                  <li
                    key={item.id}
                    onDragStart={(e) => handleDragStart(e, item, "list")}
                    draggable
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCard className="mb-3 shadow-box-example">
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
                    <MDBRow>
                      <MDBCol md="1">
                        <span style={{ whiteSpace: "pre" }}>
                          {whiteSpace("CORE SUBJECTS")}
                        </span>
                      </MDBCol>
                      <MDBCol md="11">
                        <MDBTable
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e)}
                          className="table table-bordered"
                        >
                          <MDBTableHead>
                            <tr>
                              <th className="text-center font-weight-bold border-right">
                                1st Semester
                              </th>
                              <th className="text-center font-weight-bold">
                                2nd Semester
                              </th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            {tableItems.map((item) => (
                              <tr
                                key={item.id}
                                onDragStart={(e) =>
                                  handleDragStart(e, item, "table")
                                }
                                draggable
                              >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td></td>
                              </tr>
                            ))}
                          </MDBTableBody>
                        </MDBTable>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
              {/* <table
                className="table"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ whiteSpace: "pre" }}>
                      {whiteSpace("CORE SUBJECTS")}
                    </td>
                  </tr>
                  {tableItems.map((item) => (
                    <tr
                      key={item.id}
                      onDragStart={(e) => handleDragStart(e, item, "table")}
                      draggable
                    >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
