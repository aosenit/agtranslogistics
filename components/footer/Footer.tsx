import Image from "next/image";
import React from "react";
import { FiInstagram, FiMail, FiSend, FiTwitter } from "react-icons/fi";
import { HiArrowLongUp } from "react-icons/hi2";
import { AiOutlineFacebook } from "react-icons/ai";
import ContactDetails from "./ContactDetails";
import SocialMediaLinks from "./SocialMediaLinks";
import Form from "./Form";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  return (
    <section className="container  ">
      <div className="lg:grid lg:grid-cols-3 lg:gap-[40px] lg:items-start">
        <div
          className="flex justify-between items-center h-[60px] lg:h-fit lg:items-start lg:flex-col lg:gap-[50px]"
          data-aos-delay="150"
          data-aos="fade-down"
        >
          <div className="grid gap-2">
            <Image
              width={100}
              height={50}
              alt="a&g logo"
              src={"/assets/logo-new.png"}
              className="w-[60px]"
            />

            <h5 className="text-[16px] font-[500] text-[var(--gray-color)]">
              Delivering Excellence, Mile After Mile
            </h5>
          </div>

          <span className=" h-[53px] w-[53px] rounded-full bg-[#1D2449] flex justify-center items-center lg:hidden">
            <HiArrowLongUp onClick={() => scrollToTop()} />
          </span>

          <div className="hidden lg:block">
            <ContactDetails />
          </div>
        </div>

        <div
          className="hidden lg:grid lg:gap-8 justify-self-center"
          data-aos-delay="180"
          data-aos="fade-down"
        >
          <ul className="grid grid-flow-dense gap-3 text-[16px] font-[500] text-[var(--gray-color)]">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Our Services
            </a>
            <a href="#project" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#testimonial"
              className="hover:text-white transition-colors"
            >
              Success Stories
            </a>
            <a href="#articles" className="hover:text-white transition-colors">
              Articles
            </a>
          </ul>

          <SocialMediaLinks />
        </div>

        <Form />

        <div className="lg:hidden">
          <ContactDetails />
        </div>
      </div>

      <div className="text-center flex flex-col items-center gap-[70px] mt-[85px]">
        <div className="lg:hidden">
          <SocialMediaLinks />
        </div>

        <h6 className="text-[16px] font-[500] text-[var(--gray-color)]">
          © 2023 A&G Transport and Logistics Limited. All rights reserved.
        </h6>
      </div>
    </section>
  );
};

export default Footer;
