import FeaturedItem from "@/components/molecules/FeaturedItem";
import React from "react";

const FeaturedGames = () => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedItem
            thumbnail="Thumbnail-1"
            title="Call of duty"
            category="mobile"
          />
          <FeaturedItem
            thumbnail="Thumbnail-2"
            title="Call of duty : modern"
            category="mobile"
          />
          <FeaturedItem
            thumbnail="Thumbnail-3"
            title="Mobile legend"
            category="mobile"
          />
          <FeaturedItem
            thumbnail="Thumbnail-4"
            title="Clash of clans"
            category="mobile"
          />
          <FeaturedItem
            thumbnail="Thumbnail-5"
            title="Call of duty"
            category="mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
