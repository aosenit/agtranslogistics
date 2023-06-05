"use client";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import StarIcon from "./StarIcon";
import HeroImage from "./HeroImage";
import useAos from "@/hook/useAos";
import LargeScreenNav from "./LargeScreenNav";
import { navList } from "@/utils/navListData";
import MobileNav from "./MobileNav";
import useStore from "@/utils/store";
import { useRouter } from "next/navigation";

const Header = () => {
  useAos();
  const openNav = useStore((state) => state.showMobileNav);
  const setOpenNav = useStore((state) => state.setShowMobileNav);

  const router = useRouter();

  return (
    <div className="">
      {openNav && <MobileNav />}

      <div className="container">
        <div className="flex justify-between items-center h-[100px] ">
          <Image
            width={100}
            height={50}
            alt="a&g logo"
            src={"/assets/logo-new.png"}
            className="w-[60px]"
            onClick={() => router.replace("/")}
          />
          <LargeScreenNav />

          <FiMenu
            className="w-[24px] h-[24px] lg:hidden"
            onClick={() => setOpenNav(true)}
          />
          <a
            href={`#${navList[navList.length - 1].href}`}
            className="px-[3rem] py-[.5rem] bg-[#121B4A] text-white rounded-md hover:opacity-90 hidden lg:block"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col items-center gap-[34px] text-center lg:flex-row lg:h-[148px] lg:mt-[50px]">
          <div
            className="flex flex-col items-center gap-[34px] lg:flex-row lg:text-left lg:items-start "
            data-aos="slide-right"
          >
            <h1 className="relative font-[300] text-[30px] lg:text-[46px] lg:font-[600] ">
              <span>
                Logistics, Haulage, and Fleet Management - Handled with Class
              </span>
              <span className="hidden lg:inline absolute right-8 top-3 ">
                <StarIcon />
              </span>
            </h1>

            <div className="lg:hidden">
              <StarIcon />
            </div>
          </div>

          <p
            className="text-[16px] font-[400] text-[var(--gray-color)] lg:text-left"
            data-aos="slide-left"
          >
            A & G Transport and Logistics Limited - Your Trusted Partner for
            Swift and Safe Logistics, Haulage, and Fleet Management.
          </p>
        </div>
      </div>

      <div className="mt-[80px] bg-[#F7F7F7]">
        <HeroImage />
      </div>
    </div>
  );
};

export default Header;
