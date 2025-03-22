import React, { useState } from "react";
import * as Yup from "yup";

// Create a Yup schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
});

const YubOnlyForm = () => {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await schema.validate(values, { abortEarly: false });
      console.log("✅ Valid data:", values);
      setErrors({});
    } catch (err: any) {
      const formErrors: { [key: string]: string } = {};
      err.inner.forEach((e: any) => {
        formErrors[e.path] = e.message;
      });
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default YubOnlyForm;
