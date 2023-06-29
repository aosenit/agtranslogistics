import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { testimonials } from "./data";

const srcArray = [
  "/assets/testimonial-img-1.png",
  // "/assets/testimonial-img-2.png",
  // "/assets/testimonial-img-3.png",
  // "/assets/testimonial-img-4.png",
  // "/assets/testimonial-img-5.png",
];

const Testimonial = () => {
  const [index, setIndex] = useState(3);
  const prev = () => {
    setIndex((currentIndex) =>
      currentIndex <= 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };
  const next = () => {
    setIndex((currentIndex) =>
      currentIndex >= testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="container">
      <SectionTitle
        title={"Testimonials"}
        heading={
          <h3>
            Voices of Satisfaction from Our Valued
            <span className="text-[var(--blue-color)]"> Partners</span>
          </h3>
        }
        description={
          "Dive into the authentic experiences of our delighted partners, who have shared their journey and success stories with us. "
        }
      />

      {/* testimonials */}
      <div className="lg:max-w-[60%] lg:mx-auto">
        <h4
          data-aos="fade-down"
          data-aos-delay="150"
          className={`relative p-8 text-[#3F3C3C] text-[20px] font-[500] after:text-black after:content-['"'] after:text-[45px] after:absolute after:-right-1 after:top-0 before:content-['"'] before:absolute before:-left-1 before:top-0 before:text-[45px] before:text-black `}
        >
          {testimonials[index].testimony}
        </h4>

        <div className="lg:flex justify-between items-center lg:my-[30px]">
          <div className="flex flex-col gap-1 px-8">
            {/* <h5
              className="text-[18px] font-[600] "
              data-aos="fade-right"
              data-aos-delay="180"
            >
              {" "}
              {testimonials[index].name}
            </h5> */}
            <p
              className="text-[16px] font-[400] text-[var(--gray-color)]"
              data-aos="fade-left"
              data-aos-delay="180"
            >
              {testimonials[index].title}
            </p>
          </div>

          <div
            className="flex my-[60px] gap-[20px] justify-center lg:my-0"
            data-aos="fade-left"
            data-aos-delay="180"
          >
            <span className=" h-[53px] w-[53px] rounded-full bg-[#F7F7F7] flex justify-center items-center">
              <HiArrowLongLeft onClick={() => prev()} />
            </span>
            <span className=" h-[53px] w-[53px] rounded-full bg-[#F7F7F7] flex justify-center items-center">
              <HiArrowLongRight onClick={() => next()} />
            </span>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="flex gap-[32px] justify-between items-center h-[100px] lg:mt-[100px]">
        {srcArray.map((src) => {
          return (
            <div
              className="h-[40px] lg:h-[70px] w-full"
              key={src}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Image
                src={src}
                alt="testimonial image"
                width={100}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
