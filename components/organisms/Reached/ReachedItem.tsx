import React from "react";

interface ReachedItemProps {
  title: string
  value: string
  style?: string
}

const ReachedItem = (props: ReachedItemProps) => {
  const {title, value, style} = props
  return (
    <div className={`me-lg-35 ${style}`}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {value}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {title}
      </p>
    </div>
  );
};

export default ReachedItem;
