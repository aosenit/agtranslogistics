import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiMail, FiPhoneCall, FiTwitter } from "react-icons/fi";

const SocialMediaLinks = () => {
  return (
    <div className="">
      <h3 className="text-[16px] font-[700] mb-[14px]">Connect with us</h3>
      <div className="flex items-center gap-[18px]">
        {/* <FiInstagram className="text-[25px]" />
        <AiOutlineFacebook className="text-[25px]" />
        <FiTwitter className="text-[25px]" /> */}
        <a href="mailto:hr@agtranslogistics.com">
          <FiMail className="text-[25px] hover:text-[var(--blue-color)] transition-colors" />
        </a>
        <a href="tel:+2348094000115">
          <FiPhoneCall className="text-[25px] hover:text-[var(--blue-color)] transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
