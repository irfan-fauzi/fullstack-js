import HomePage from "@/components/templates/HomePage";

import AOS from "aos";

import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}
