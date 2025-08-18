"use client";
import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "@/context/FormContext";

const PersonalDetail = () => {
  const { formData, setFormData } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Personal Info</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Full Name"
          size="small"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        <TextField
          label="Middle Name"
          size="small"
          value={formData.middleName}
          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
        />
        <TextField
          label="Last Name"
          size="small"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <TextField
          label="Email"
          size="small"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          size="small"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <TextField
          label="Contact"
          size="small"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
        />
      </div>
    </div>
  );
};

export default PersonalDetail;
