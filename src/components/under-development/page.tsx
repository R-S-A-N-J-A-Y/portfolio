"use client";

import Lottie from "lottie-react";
import Underdevelopmentdata from "@/components/json/Under-Construction.json";

const page = () => {
  return (
    <section className="min-h-screen flex flex-col items-center px-100">
      <Lottie
        animationData={Underdevelopmentdata}
        loop
        className="w-120 h-120"
      />
      <p className="font-serif text-[1.300rem] leading-12 text-gray-400 font-bold text-wrap text-center">
        Building something worth the wait. The foundation is set, the design is
        taking shape, and this page will be ready to welcome you soon.
      </p>
    </section>
  );
};

export default page;
