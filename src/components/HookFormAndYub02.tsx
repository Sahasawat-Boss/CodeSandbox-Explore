//Cleaner that HookFormAndYub01
//Safer with TypeScript(Typed with FormData)
//More scalable
//Clean and professional 
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../CSS/AddUserForm.css";

// ✅ Define form data types
interface FormData {
  name: string;
  email: string;
  role: string;
}

// ✅ Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  role: Yup.string().required("Role is required"),
});

const HookFormAndYub02: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("✅ Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          {...register("name")}
        />
        {errors.name && <p className="formError">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && <p className="formError">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role")}>
          <option value="">Select role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        {errors.role && <p className="formError">{errors.role.message}</p>}
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default HookFormAndYub02;
