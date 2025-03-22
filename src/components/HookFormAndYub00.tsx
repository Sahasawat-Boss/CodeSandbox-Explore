//Best Practice React Hook Form + Yup
//React Hook Form gives better performance and cleaner code than useState
//Yup gives scalable, centralized validation logic.

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../CSS/AddUserForm.css";
//-------------------------------------------------------------

// Define the validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  role: Yup.string().required("Role is required."),
});
//-------------------------------------------------------------

const HookFormAndYub: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
//-------------------------------------------------------------
  const onSubmit = (data: any) => {
    console.log(data); // Log the form data when submitted
  };
//-------------------------------------------------------------
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Please enter Name"
          {...register("name")}
        />
        {errors.name && <div className="formError">{errors.name.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Please enter Email"
          {...register("email")}
        />
        {errors.email && (
          <div className="formError">{errors.email.message}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role")}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        {errors.role && <div className="formError">{errors.role.message}</div>}
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default HookFormAndYub;
