import FeaturedGames from "@/components/organisms/FeaturedGames";
import Footer from "@/components/organisms/Footer";
import MainBanner from "@/components/organisms/MainBanner";
import Navbar from "@/components/organisms/Navbar";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import TransectionStep from "@/components/organisms/TransactionStep";

import AOS from "aos";

import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      {/* <!-- Header --> */}
      <MainBanner />

      {/* <!-- transactionStep --> */}
      <TransectionStep />

      {/* <!-- 5 Column - Featured-game --> */}
      <FeaturedGames />

      {/* <!-- Reached --> */}
      <Reached />

      {/* <!-- Story --> */}
      <Story />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
