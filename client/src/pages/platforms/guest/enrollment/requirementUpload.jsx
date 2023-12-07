import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import {
  ENDPOINT,
  axioKit,
  isValidImage,
} from "../../../../services/utilities";
import { useSelector } from "react-redux";
import { generateSY } from "../../../../services/utilities";
import Swal from "sweetalert2";

export default function RequirementUpload({
  label = "1x1 ID Picture",
  id = "1x1Picture",
  isPublished,
  email,
}) {
  const [preview, setPreview] = useState(null),
    { token } = useSelector(({ auth }) => auth);

  useEffect(() => {
    let isMounted = true;

    if (label && email) {
      const url = `${ENDPOINT}/assets/enrollments/${generateSY(
        true
      )}/${email}/${label}.jpg`;
      isValidImage(url, (valid) => {
        if (valid && isMounted) setPreview(url);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [label, email]);

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

    const reader = new FileReader();

    reader.onload = (e) => {
      const { result } = e.target;

      axioKit.upload(
        {
          name: `${label}.jpg`,
          base64: result.split(",")[1],
          path: `enrollments/${generateSY(true)}/${email}`,
        },
        token
      );
    };

    reader.readAsDataURL(file);
  };

  return (
    <MDBCard
      className={`h-100 text-center ${preview && "cursor-pointer"}`}
      onClick={() => {
        if (!preview) return;
        window.open(preview, "_blank");
      }}
    >
      <MDBCardBody className="py-1">
        {preview ? (
          <img
            className="mb-1"
            height="100px"
            width="auto"
            src={preview}
            alt={preview}
          />
        ) : (
          <div className="h-100 d-flex align-items-center">
            <span className="mx-auto">{label}</span>
          </div>
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
        {preview
          ? label
          : !isPublished && (
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
