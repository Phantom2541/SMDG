import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdbreact";
import React, { useRef, useState } from "react";

const FileInput = ({ label }) => {
  const [preview, setPreview] = useState(null),
    canvasRef = useRef(null);

  const handleChange = (e) => {};

  const handleCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);

      const photoBlob = await imageCapture.takePhoto();
      const imageUrl = URL.createObjectURL(photoBlob);

      setPreview(imageUrl);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  return (
    <>
      <label className="mt-4">
        8. <b>{label}</b> -<i>Upload image Correctly</i>
      </label>
      <input
        type="file"
        onChange={handleChange}
        className="d-none"
        id="uploadimg"
      />
      <MDBRow>
        <MDBCol md="2">
          <MDBCard className="z-depth-0">
            <canvas ref={canvasRef} className="d-none" />
            <img src={preview} height="150" />
            <label
              className="bg-primary text-white text-center mb-0 w-100 py-2 cursor-pointer my-2"
              htmlFor="uploadimg"
            >
              Upload Image <MDBIcon className="ml-2" icon="upload" />
            </label>
            <small
              onClick={handleCamera}
              className="text-center cursor-pointer"
            >
              Take a photo using the camera
            </small>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default function Images() {
  return (
    <>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        V. OTHER INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <FileInput label="1 x 1 Photo & Signature Photo" />
      </MDBContainer>
    </>
  );
}
