import Image from "next/image";
import React from "react";

interface StepItemProps {
  icon: "step-icon-1" | "step-icon-2" | "step-icon-3";
}

const StepItem = (props: StepItemProps) => {
  const { icon } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          className="mb-30"
          width={80}
          height={80}
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">1. Start</p>
        <p className="text-lg color-palette-1 mb-0">
          Pilih salah satu game
          <br />
          yang ingin kamu top up
        </p>
      </div>
    </div>
  );
};

export default StepItem;
