import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import { axioKit } from "../../../../services/utilities";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function RequirementUpload({
  label = "1x1 ID Picture",
  id = "1x1Picture",
  isPublished,
}) {
  const [preview, setPreview] = useState(null),
    { email, token } = useSelector(({ auth }) => auth);

  const handleChange = (e) => {
    const [file] = e.target.files;
    setPreview(URL.createObjectURL(file));

    if (file.type !== "image/jpeg")
      return Swal.fire({
        icon: "error",
        title: "Invalid File Format",
        text: "Image must be JPG or JPEG format",
        showConfirmButton: false,
      });

    console.log(file);

    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   const { result } = e.target;

    //   axioKit.upload(
    //     {
    //       name: `${label}.jpg`,
    //       base64: result.split(",")[1],
    //       path: `employments/${email}`,
    //     },
    //     token
    //   );
    // };

    // reader.readAsDataURL(file);
  };

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
        <input
          className="d-none"
          type="file"
          id={id}
          onChange={handleChange}
          accept="image/jpeg"
        />
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
  );
}
