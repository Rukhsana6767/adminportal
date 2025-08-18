
import React from "react";
import StepperForm from "@/components/stepper/stepperForm";
import { FormProvider } from "@/context/FormContext";

const RegistrationPage = () => {
  return (
    <FormProvider>
      <StepperForm />
    </FormProvider>
  );
};

export default RegistrationPage;
