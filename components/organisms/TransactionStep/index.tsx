import StepItem from "@/components/molecules/StepItem";
import React from "react";

const TransectionStep = () => {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem icon="step-icon-1" />
          <StepItem icon="step-icon-2" />
          <StepItem icon="step-icon-3" />
          
        </div>
      </div>
    </section>
  );
};

export default TransectionStep;
