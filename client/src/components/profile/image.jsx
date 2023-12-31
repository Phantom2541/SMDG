import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBCard,
  MDBView,
  MDBCardBody,
  MDBAvatar,
  MDBProgress,
} from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { PresetImage } from "../../services/utilities";
import { useToasts } from "react-toast-notifications";

export default function ProfileImage() {
  const [file, setFile] = useState(null),
    { auth, progressBar, image } = useSelector(({ auth }) => auth),
    dispatch = useDispatch(),
    { addToast } = useToasts();

  useEffect(() => {
    if (file && progressBar === 100) {
      // dispatch(IMAGE(URL.createObjectURL(file)));
      setFile(null);
      addToast("Image Updated Successfully.", {
        appearance: "success",
      });
    }
  }, [progressBar, file, dispatch, addToast]);

  const handleError = (message) =>
    addToast(message, {
      appearance: "warning",
    });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file.type !== "image/jpeg" || file.type !== "image/jpg")
      return handleError("Please select a JPG image.");

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        if (this.width !== this.height)
          return handleError("Image must be square.");

        if (this.width > 100)
          return handleError("Image too big, maximum size is 100 pixels.");

        setFile(file);
        dispatch();
        // UPLOAD({
        //   data: {
        //     path: `${auth.email}`,
        //     base64: reader.result.split(",")[1],
        //     name: "profile.jpg",
        //   },
        //   token,
        // })
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <MDBCol lg="3" className="mb-4">
      <MDBCard narrow>
        <MDBView cascade className="mdb-color lighten-3 card-header">
          <h5 className="mb-0 font-weight-bold text-center text-white">
            Edit Photo
          </h5>
        </MDBView>
        <MDBCardBody className="text-center">
          {auth._id && (
            <MDBAvatar
              tag="img"
              src={image}
              onError={(e) => (e.target.src = PresetImage(auth.isMale))}
              alt={`preview-${auth._id}`}
              className="z-depth-1 mb-3 mx-auto rounded"
            />
          )}

          {progressBar >= 0 && <MDBProgress value={progressBar} animated />}
          <p className="text-muted">
            <small>
              {progressBar > -1
                ? "Please wait while we update your profile photo"
                : "Profile photo will be changed automatically"}
            </small>
          </p>
          <label
            htmlFor="changeImage"
            className="btn btn-info btn-sm btn-rounded"
          >
            Upload New Photo
          </label>
          <input
            id="changeImage"
            onChange={handleImageChange}
            type="file"
            className="d-none"
            accept="image/jpeg, image/jpg"
          />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
