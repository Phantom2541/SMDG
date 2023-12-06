import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import RequirementUpload from "./requirementUpload";
import CustomSelect from "../../../../components/customSelect";
import { Departments } from "../../../../services/fakeDb";
import { formatGradeLvl } from "../../../../services/utilities";

const { collections, getGradeLevels } = Departments;

export default function Learner({ setActiveStep, handleForm }) {
  // const [showGrade, setShowGrade] = useState(true);

  const { form, setForm } = handleForm;

  // used for rerendering MDBSelect
  // useEffect(() => {
  //   if (!showGrade) {
  //     setTimeout(() => setShowGrade(true), 1);
  //   }
  // }, [showGrade]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { department, gradeLvl, lrn } = form;

  return (
    <>
      <div className="row">
        <div className="col-6">
          <MDBInput
            value={lrn}
            onChange={(e) => handleChange("lrn", e.target.value.toUpperCase())}
            label="Learner Reference No. (LRN)"
          />
        </div>
        <div className="col-6">
          <MDBInput
            value="new"
            onChange={(e) => handleChange("tpye", e.target.value)}
            label="Leaners Type (New)"
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <CustomSelect
            choices={collections}
            label="Department"
            preValue={department}
            values="key"
            texts="name"
            onChange={(e) => {
              setForm({
                ...form,
                department: e,
                gradeLvl: getGradeLevels(e)[0],
              });
              // setShowGrade(false);
            }}
          />
        </div>
        <div className="col-6">
          {/* {showGrade && ( */}
          <CustomSelect
            choices={getGradeLevels(department).map((id) => ({
              id,
              str: formatGradeLvl(department, id),
            }))}
            label="Grade Level"
            preValue={gradeLvl}
            values="id"
            texts="str"
            onChange={(e) => handleChange("gradeLvl", e)}
          />
          {/* )} */}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <RequirementUpload />
        </div>
      </div>
      <MDBBtn
        style={{ float: "right" }}
        color="primary"
        onClick={() => setActiveStep(1)}
      >
        Next
      </MDBBtn>
    </>
  );
}
