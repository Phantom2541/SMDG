import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BROWSE,
  DESTROY,
  RESET,
  TOGGLEMODAL,
} from "../../../../services/redux/slices/violations";
import DataTable from "../../../../components/dataTable";
import { fullName, globalSearch } from "../../../../services/utilities";
import Modal from "./modal";
import { useToasts } from "react-toast-notifications";

export default function Violations() {
  const [violations, setViolations] = useState([]),
    [selected, setSelected] = useState({}),
    [willCreate, setWillCreate] = useState(true),
    { token } = useSelector(({ auth }) => auth),
    { collections, isLoading, isSuccess, message } = useSelector(
      ({ violations }) => violations
    ),
    { addToast } = useToasts(),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(BROWSE(token));

    return () => dispatch(RESET());
  }, [dispatch, token]);

  useEffect(() => {
    setViolations(collections);
  }, [collections]);

  useEffect(() => {
    if (message) {
      addToast(message, {
        appearance: isSuccess ? "success" : "error",
      });
    }
  }, [isSuccess, message, addToast]);

  const handleSearch = async (willSearch, key) => {
    if (willSearch) return setViolations(globalSearch(collections, key));

    setViolations(collections);
  };

  const handleCreate = () => {
    if (!willCreate) setWillCreate(true);

    dispatch(TOGGLEMODAL());
  };

  const handleUpdate = (selected) => {
    if (willCreate) setWillCreate(false);

    setSelected(selected);
    dispatch(TOGGLEMODAL());
  };

  const handleDelete = (selected) => {
    dispatch(
      DESTROY({
        token,
        data: selected,
      })
    );
  };

  return (
    <>
      <DataTable
        title="Criteria of Violations"
        isLoading={isLoading}
        array={violations}
        actions={[
          {
            _icon: "plus",
            _title: "Add Criteria",
            _function: handleCreate,
          },
          {
            _icon: "pen",
            _title: "Update Criteria",
            _function: handleUpdate,
            _shouldReset: true,
            _haveSelect: true,
            _allowMultiple: false,
          },
          {
            _icon: "trash",
            _title: "Delete Criteria",
            _function: handleDelete,
            _shouldReset: true,
            _haveSelect: true,
            _allowMultiple: true,
          },
        ]}
        tableHeads={[
          {
            _text: "Title",
          },
          {
            _text: "Created By",
          },
        ]}
        tableBodies={[
          {
            _key: "title",
          },
          {
            _key: "createdBy",
            _format: (data) => fullName(data.fullName),
          },
        ]}
        handleSearch={handleSearch}
      />
      <Modal
        willCreate={willCreate}
        selected={{ title: selected.title, _id: selected._id }}
      />
    </>
  );
}
