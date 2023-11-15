import { MDBIcon, MDBMedia } from "mdbreact";
import React, { useState } from "react";

export default function RequirementUpload() {
  const [file, setFile] = useState(),
    [uploadedFile, setUploadedFile] = useState(true);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setUploadedFile(file);
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card" style={{ width: "145px" }}>
          <img
            className="mb-1"
            style={{ border: "none" }}
            src={file}
            id="defaultlabel"
          />
          {uploadedFile && (
            <label
              style={{ color: "grey" }}
              className="postion-absolute text-center"
              htmlFor="defaultlabel"
            >
              1 x 1 ID Picture
            </label>
          )}
          <input
            style={{ display: "none" }}
            type="file"
            id="customFile"
            onChange={handleChange}
          />
          <label
            className="btn-primary mb-0 p-2 w-30 text-center "
            htmlFor="customFile"
          >
            Upload File
            <MDBIcon className="ml-2" icon="upload" />
          </label>
        </div>
      </div>
    </div>
  );
}
