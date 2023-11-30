import React, { useState } from "react";
import Swal from "sweetalert2";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import "./styles/uploadPDF.css";

export default function UploadPDF({ title = "Preset", readOnly = false }) {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const [file] = e.target.files;

    if (file.type !== "application/pdf")
      return Swal.fire("Invalid File format");

    setPreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  return (
    <MDBRow className="mb-4">
      <MDBCol md="4">
        <div>
          <input
            className="d-none"
            id="uploadpdf"
            type="file"
            onChange={handleUpload}
            accept="application/pdf"
          />

          <div
            className="card"
            style={{
              width: "300px",
              height: "auto",
            }}
          >
            <div className="pdf-container">
              {!preview && (
                <div style={{ color: "grey" }} className="text-center p-2">
                  Application Letter
                </div>
              )}
              {preview && <iframe title={title} src={preview} width="317px" />}
            </div>
            {!readOnly && (
              <label
                htmlFor="uploadpdf"
                className="cursor-pointer text-center btn-primary p-1"
                style={{
                  margin: "auto",
                  width: "300px",
                }}
              >
                Upload PDF <MDBIcon className="ml-2" icon="upload" />
              </label>
            )}
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
}
