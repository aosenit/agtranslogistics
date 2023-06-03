import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

const SocialMediaLinks = () => {
  return (
    <div className="">
      <h3 className="text-[16px] font-[700] mb-[14px]">Connect with us</h3>
      <div className="flex items-center gap-[18px]">
        <FiInstagram className="text-[25px]" />
        <AiOutlineFacebook className="text-[25px]" />
        <FiTwitter className="text-[25px]" />
        <FiMail className="text-[25px]" />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
