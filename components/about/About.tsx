"use client";

import useAos from "@/hook/useAos";
import SectionTitle from "../SectionTitle";
import Cards from "./Cards";

const About = () => {
  useAos();
  return (
    <div className="container">
      <SectionTitle
        title={"About Us"}
        heading={
          <h3>
            Let’s Handle your
            <span className="text-[var(--blue-color)]"> Logistics </span> and
            <span className="text-[var(--blue-color)]"> Haulage </span>
            needs
          </h3>
        }
        description={
          "Here are a few compelling reasons why A & G stands out as your ideal choice in Logistics, Haulage, and Fleet Management."
        }
      />

      {/* card container */}
      <div className="flex flex-col gap-[33px] mt-[80px] lg:grid lg:grid-cols-3">
        <Cards
          delay={1}
          src="/assets/green-icon.png"
          title="Unmatched Security"
          content="We place paramount importance on the safety of your goods. Our sophisticated security protocols ensure your shipments are always protected."
        />
        <Cards
          delay={2}
          src="/assets/blue-icon.png"
          title="Profound Professionalism"
          content="Our experienced team is dedicated to providing services with the highest levels of professionalism. We're here to offer expert guidance and support every step of the way."
        />
        <Cards
          delay={3}
          src="/assets/yellow-icon.png"
          title="Always Available"
          content="We pride ourselves on our commitment to being readily accessible to our clients. No matter the time, no matter the place, A & G is there when you need us."
        />
      </div>
    </div>
  );
};

export default About;
