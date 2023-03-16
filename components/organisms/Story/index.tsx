import React from "react";
import CaptionContainer from "./CaptionContainer";
import ImageContainer from "./ImageContainer";

const Story = () => {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <ImageContainer picture="Header-9" />
          <CaptionContainer />
        </div>
      </div>
    </section>
  );
};

export default Story;
