"use client";
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
    accountHolder: "",
    accountNumber: "",
    branchName: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData, nextStep, prevStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
