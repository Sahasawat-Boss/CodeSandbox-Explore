//Manual Inline Validation
import React, { useState } from "react";
import "../CSS/AddUserForm.css";

const ManualValidation: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors: any = {};

    if (!name) formErrors.name = "Name is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      formErrors.email = "Valid email is required.";

    setErrors(formErrors);

    if (!formErrors.name && !formErrors.email) {
      console.log({ name, email, role });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Please enter Name"
          required
        />
        {errors.name && <div>{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter Email"
          required
        />
        {errors.email && <div className="formError">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default ManualValidation;
