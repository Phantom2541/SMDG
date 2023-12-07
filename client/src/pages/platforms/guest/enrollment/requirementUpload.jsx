import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

export default function RequirementUpload({
  label = "1x1 ID Picture",
  id = "1x1Picture",
}) {
  const [preview, setPreview] = useState(null),
    [file, setFile] = useState(null);

  function handleChange(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setFile(file);
  }

  return (
    <MDBCard
      className={`h-100 text-center ${preview && "cursor-pointer"}`}
      onClick={() => {
        if (!preview) return;
        window.open(preview, "_blank");
      }}
    >
      <MDBCardBody>
        {preview ? (
          <img
            className="mb-1"
            height="100px"
            width="auto"
            src={preview}
            alt={preview}
          />
        ) : (
          label
        )}
        <input className="d-none" type="file" id={id} onChange={handleChange} />
      </MDBCardBody>
      <div className={`card-footer p-${preview ? "2" : "0"}`}>
        {preview ? (
          label
        ) : (
          <label
            title="Upload Picture"
            htmlFor={id}
            className="bg-primary text-white mb-0 w-100 py-2 cursor-pointer"
          >
            Upload File
            <MDBIcon className="ml-2" icon="upload" />
          </label>
        )}
      </div>
    </MDBCard>
    // <div className="card pt-2 text-center" style={{ width: "145px" }}>
    //   {preview ? (
    //     <img className="mb-1" src={preview} alt={preview} />
    //   ) : (
    //     <label style={{ color: "grey" }}>{label}</label>
    //   )}
    //   <input className="d-none" type="file" id={id} onChange={handleChange} />
    //   <label className="cursor-pointer btn-primary mb-0 p-2 w-30" htmlFor={id}>
    //     {preview ? (
    //       label
    //     ) : (

    //     )}
    //   </label>
    // </div>
  );
}
