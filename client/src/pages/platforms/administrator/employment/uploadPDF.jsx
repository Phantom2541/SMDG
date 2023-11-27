import React, { useState } from "react";
import { MDBIcon } from "mdbreact";

export default function UploadPDF({
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
    <div className="mt-4">
      <div className="card pt-2 text-center" style={{ width: "145px" }}>
        {preview ? (
          <img className="mb-1" src={preview} alt={preview} />
        ) : (
          <label style={{ color: "grey" }}>{label}</label>
        )}
        <input className="d-none" type="file" id={id} onChange={handleChange} />
        <label
          className="cursor-pointer btn-primary mb-0 p-2 w-30"
          htmlFor={id}
        >
          {preview ? (
            label
          ) : (
            <>
              Upload File
              <MDBIcon className="ml-2" icon="upload" />
            </>
          )}
        </label>
      </div>
    </div>
  );
}
