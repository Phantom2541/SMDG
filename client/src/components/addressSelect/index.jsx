import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Philippines } from "../../services/fakeDb";
import CustomSelect from "../customSelect";

export default function AddressSelect({
  disabledAllExceptSelected = false,
  handleChange = () => {},
  address = {
    region: "REGION III (CENTRAL LUZON)",
    province: "NUEVA ECIJA",
    city: "CABANATUAN CITY",
    barangay: "",
    zip: "",
    street: "",
  },
  size = "3",
  label = "Address Information",
  uniqueId = "",
}) {
  const handleAddress = (key, value) => {
    const _address = { ...address };

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

  return (
    <>
      <h6 className="mb-0">{label}</h6>
      <MDBRow>
        <MDBCol md={size}>
          <CustomSelect
            disabledAllExceptSelected={disabledAllExceptSelected}
            choices={Philippines.Regions}
            preValue={address.region}
            onChange={(e) => handleAddress("region", e)}
            label="Region"
            values="name"
            texts="name"
            uniqueId={uniqueId}
          />
        </MDBCol>
        <MDBCol md={size}>
          <CustomSelect
            disabledAllExceptSelected={disabledAllExceptSelected}
            choices={Philippines.Provinces(address.region)}
            preValue={address.province}
            onChange={(e) => handleAddress("province", e)}
            label="Province"
            values="name"
            texts="name"
            uniqueId={uniqueId}
          />
        </MDBCol>
        <MDBCol md={size}>
          <CustomSelect
            disabledAllExceptSelected={disabledAllExceptSelected}
            choices={Philippines.Cities(address.province)}
            preValue={address.city}
            onChange={(e) => handleAddress("city", e)}
            label="City/Municipality"
            values="name"
            texts="name"
            uniqueId={uniqueId}
          />
        </MDBCol>
        <MDBCol md={size}>
          <CustomSelect
            disabledAllExceptSelected={disabledAllExceptSelected}
            choices={Philippines.Barangays(address.city)}
            preValue={address.barangay}
            onChange={(e) => handleAddress("barangay", e === "none" ? "" : e)}
            label="Barangay"
            values="name"
            texts="name"
            uniqueId={uniqueId}
          />
        </MDBCol>
      </MDBRow>
    </>
  );
}
