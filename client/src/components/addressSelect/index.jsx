import React from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Philippines } from "../../services/fakeDb";

export default function AddressSelect({
  handleChange = () => {},
  address = {},
  size = "3",
  label = "Address Information",
}) {
  const handleAddress = (key, value) => {
    const _address = { ...address };

    console.log(key, value);

    switch (key) {
      case "region":
        _address.region = value;
        _address.province = Philippines.initialProvince(value);
        _address.city = Philippines.initialCity(_address.province);
        break;

      case "province":
        _address.province = value;
        const cityCode = Philippines.initialCity(value);
        _address.city = cityCode;
        break;

      default:
        _address[key] = value;
        break;
    }

    handleChange("address", _address);
  };

  const {
    region = "REGION III (CENTRAL LUZON)",
    province = "NUEVA ECIJA",
    city = "CABANATUAN CITY",
    barangay = "",
    zip = "",
    street = "",
  } = address;

  return (
    <>
      <h6>{label}</h6>
      <MDBRow>
        <MDBCol md={size}>
          <label className="mb-0">Region</label>
          <select
            value={region}
            onChange={(e) => handleAddress("region", e.target.value)}
            className="form-control"
          >
            {Philippines.Regions.map(({ name, code }) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol md={size}>
          <label className="mb-0">Province</label>
          <select
            value={province}
            onChange={(e) => handleAddress("province", e.target.value)}
            className="form-control"
          >
            {Philippines.Provinces(region).map(({ name, code }) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol md={size}>
          <label className="mb-0">City/Municipality</label>
          <select
            value={city}
            onChange={(e) => handleAddress("city", e.target.value)}
            className="form-control"
          >
            {Philippines.Cities(province).map(({ name, code }) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol md={size}>
          <label className="mb-0">City/Municipality</label>
          <select
            value={barangay}
            onChange={(e) => handleAddress("barangay", e.target.value)}
            className="form-control"
          >
            <option>???</option>
            {Philippines.Barangays(city).map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="8">
          <MDBInput
            type="text"
            label="Street Name"
            value={street}
            outline
            onChange={(e) => handleAddress("street", e.target.value)}
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            type="number"
            label="Zip Code"
            value={String(zip)}
            outline
            onChange={(e) => handleAddress("zip", Number(e.target.value))}
          />
        </MDBCol>
      </MDBRow>
    </>
  );
}
