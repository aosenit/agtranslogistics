import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { projects } from "./data";

const Project = () => {
  const [index, setIndex] = useState(3);

  const prev = () => {
    setIndex((currentIndex) =>
      currentIndex <= 0 ? projects.length - 1 : currentIndex - 1
    );
  };
  const next = () => {
    setIndex((currentIndex) =>
      currentIndex >= projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="container text-white ">
      <SectionTitle
        title={"Projects"}
        heading={
          <h3>
            Proven <span className="text-[var(--blue-color)]"> Expertise </span>{" "}
            with a portfolio of successful projects.
          </h3>
        }
        description={
          "With a track record of delivering successful logistics, haulage, and fleet management projects, our expertise is proven and trusted"
        }
      />

      {/* Projects */}

      <div className="lg:grid lg:grid-cols-2 gap-[100px] items-center">
        <div className="flex flex-col gap-[16px] mt-[70px] mb-[50px] ">
          <div
            className="h-[200px] lg:h-[400px] w-full rounded-[10px] overflow-hidden"
            data-aos="zoom-in-right"
          >
            <Image
              src={projects[index]?.images.main}
              alt="project image"
              width={300}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex gap-[16px] justify-between">
            {projects[index]?.images.subImages.map((src, ind) => {
              return (
                <div
                  className="h-[100px] w-full lg:h-[160px]  rounded-[10px] overflow-hidden"
                  key={src}
                  data-aos="zoom-in"
                  data-aos-delay={`${ind * 30}`}
                >
                  <Image
                    src={src}
                    alt="project image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[45px]" data-aos="zoom-in-left">
          <div className="flex flex-col gap-1">
            <h5 className="text-[18px] font-[600] text-[var(--blue-color)]">
              Title
            </h5>
            <p className="text-[16px] font-[400]">{projects[index]?.title}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="text-[18px] font-[600] text-[var(--blue-color)]">
              Brief Description
            </h5>
            <p className="text-[16px] font-[400]">
              {projects[index]?.description}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="text-[18px] font-[600] text-[var(--blue-color)]">
              Outcome
            </h5>
            <p className="text-[16px] font-[400]">{projects[index]?.outcome}</p>
          </div>
        </div>
      </div>
      {/* Projects */}

      <div className="flex mt-[60px] gap-[20px] justify-center">
        <span className=" h-[53px] w-[53px] rounded-full bg-[#1D2449] flex justify-center items-center">
          <HiArrowLongLeft onClick={() => prev()} />
        </span>
        <span className=" h-[53px] w-[53px] rounded-full bg-[#1D2449] flex justify-center items-center">
          <HiArrowLongRight onClick={() => next()} />
        </span>
      </div>
    </div>
  );
};

export default Project;
