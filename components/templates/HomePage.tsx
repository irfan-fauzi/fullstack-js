import React from "react";
import MainBanner from "../organisms/MainBanner";
import Navbar from "../organisms/Navbar";
import TransectionStep from "../organisms/TransactionStep";
import FeaturedGames from "../organisms/FeaturedGames";
import Reached from "../organisms/Reached";
import Story from "../organisms/Story";
import Footer from "../organisms/Footer";

const HomePage = () => {
  return (
    // <Navbar />
    //   {/* <!-- Header --> */}
    //   <MainBanner />

    //   {/* <!-- transactionStep --> */}
    //   <TransectionStep />

    //   {/* <!-- 5 Column - Featured-game --> */}
    //   <FeaturedGames />

    //   {/* <!-- Reached --> */}
    //   <Reached />

    //   {/* <!-- Story --> */}
    //   <Story />

    //   {/* <!-- Footer --> */}
    //   <Footer />
    <>
      <Navbar />
      <MainBanner />
      <TransectionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default HomePage;
