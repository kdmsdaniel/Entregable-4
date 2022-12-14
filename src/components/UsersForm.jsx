import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, usersSelected, deselectUsers }) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    birthday: ""
  };

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (usersSelected) {
      reset(usersSelected);
    } else {
      reset(initialValues);
    }
  }, [usersSelected]);

  const submit = (data) => {
    console.log(data);
    if (usersSelected) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${usersSelected.id}/`,
          data
        )
        .then(() => {
          getUsers();
          deselectUsers();
        })
        .catch((error) => console.log(error.response?.data));
    }
  };

  return (
    <form className="Users-form" onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="name">first_name</label>
        <input {...register("first_name")} type="text" id="name" />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">last_name</label>
        <input {...register("last_name")} type="text" id="last_name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">email</label>
        <input {...register("email")} type="email" id="birthday" />
      </div>
      <div className="input-container">
        <label htmlFor="birthday">birthday</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>
      <button onClick={submit}>Submit</button>
    </form>
  );
};

export default UsersForm;
