"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import PersonalDetail from "@/components/stepper/personDetail";
// import AddressDetail from "./AddressDetail";
// import BankDetail from "./BankDetail";
// import Review from "./Review";
import { Button } from "@mui/material";

const StepperForm = () => {
  const { step, prevStep, nextStep } = useFormContext();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      {/* Stepper Header */}
      <div className="flex justify-between items-center mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex-1 flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white 
                ${step >= s ? "bg-blue-600" : "bg-gray-300"}`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`flex-1 h-1 ${step > s ? "bg-blue-600" : "bg-gray-300"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 1 && <PersonalDetail />}
      {/* {step === 2 && <AddressDetail />}
      {step === 3 && <BankDetail />}
      {step === 4 && <Review />} */}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          variant="outlined"
        >
          Back
        </Button>

        {step < 4 ? (
          <Button type="button" onClick={nextStep} variant="contained">
            Next
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
