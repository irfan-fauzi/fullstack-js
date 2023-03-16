import Image from "next/image";
import React from "react";
interface ImageContainerProps {
  picture: string;
}

const ImageContainer = (props: ImageContainerProps) => {
  const { picture } = props;
  return (
    <div
      className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
      data-aos="zoom-in"
    >
      <Image
        src={`/img/${picture}.png`}
        width="612"
        height="452"
        className="img-fluid"
        alt=""
      />
    </div>
  );
};

export default ImageContainer;
