import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
} from "mdbreact";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import {
  BROWSE,
  RESET,
} from "../../../../../../../services/redux/slices/resources/sections";
import { fullName } from "../../../../../../../services/utilities";
import {
  TEACHERS,
  RESET as TEACHERRESET,
} from "../../../../../../../services/redux/slices/admissions/employments";

export default function Sections({ gradeLvl, department = "grade" }) {
  const [show, setShow] = useState(false),
    [sections, setSetctions] = useState([]),
    [selected, setSelected] = useState({}),
    [willCreate, setWillCreate] = useState(true),
    { token } = useSelector(({ auth }) => auth),
    { collections } = useSelector(({ sections }) => sections),
    dispatch = useDispatch();

  useEffect(() => {
    if (gradeLvl && token) {
      dispatch(BROWSE({ token, key: { gradeLvl, department } }));
      dispatch(TEACHERS({ token, key: { department } }));
    }
    return () => {
      dispatch(RESET());
      dispatch(TEACHERRESET());
    };
  }, [gradeLvl, department, token, dispatch]);

  useEffect(() => {
    setSetctions(collections);
  }, [collections]);

  return (
    <>
      <MDBCard>
        <div className="w-100 float-right">
          <MDBBtn
            size="md"
            color="info"
            title="Add a Section"
            className="float-right mr-3 "
            onClick={() => {
              if (!willCreate) setWillCreate(true);
              setShow(true);
            }}
          >
            <MDBIcon icon="plus" />
          </MDBBtn>
        </div>

        <MDBCardBody>
          <MDBTable responsive hover>
            <thead>
              <tr>
                <th className="th-lg">Name</th>
                <th className="th-lg">Adviser</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sections?.map((section, _id) => {
                const { name, adviser } = section;
                return (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>
                      {adviser.fullName ? (
                        fullName(adviser.fullName)
                      ) : (
                        <i className="text-black-50">None</i>
                      )}
                    </td>
                    <td className="py-2 text-center">
                      <MDBBtnGroup>
                        <MDBBtn
                          className="m-0"
                          title="Edit"
                          color="info"
                          size="sm"
                          rounded
                          onClick={() => {
                            setSelected(section);
                            setWillCreate(false);
                            setShow(true);
                          }}
                        >
                          <MDBIcon icon="pen" />
                        </MDBBtn>
                        <MDBBtn
                          className="m-0"
                          size="sm"
                          color="danger"
                          title="Delete"
                          rounded
                        >
                          <MDBIcon icon="trash-alt" />
                        </MDBBtn>
                      </MDBBtnGroup>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
      <Modal
        show={show}
        toggle={() => {
          if (!willCreate) {
            setWillCreate(true);
            setSelected({});
          }
          setShow(false);
        }}
        selected={selected}
        willCreate={willCreate}
        gradeLvl={gradeLvl}
        department={department}
      />
    </>
  );
}
