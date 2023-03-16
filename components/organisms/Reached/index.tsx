import React from "react";
import Gap from "./Gap";
import ReachedItem from "./ReachedItem";

const Reached = () => {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem title="best player" value="250m+" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <Gap />
          <ReachedItem
            title="Games Available"
            value="12.500"
            style="ms-lg-35"
          />
          <Gap />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem title="Happy Player" value="99%" style="ms-lg-35" />
          <Gap />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>

          <ReachedItem title="Rating worldwide" value="4.7" style="ms-lg-35" />
        </div>
      </div>
    </section>
  );
};

export default Reached;
