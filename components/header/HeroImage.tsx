import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <Image
      src={"/assets/hero-bg.png"}
      width={400}
      height={500}
      alt="a&g home image"
      data-aos="fadeInUp"
      data-aos-once="false"
      data-aos-delay="100"
      data-aos-duration="2000"
      className="w-full h-[30vh] lg:h-[60vh] lg:object-cover lg:object-bottom xl:h-[600px] 2xl:h-[900px] max-w-[1440px] mx-auto"
    />
  );
};

export default HeroImage;
