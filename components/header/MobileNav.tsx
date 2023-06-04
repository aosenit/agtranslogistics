import { navList } from "@/utils/navListData";
import useStore from "@/utils/store";
import React from "react";
import { FiX } from "react-icons/fi";

const MobileNav = () => {
  const setOpenNav = useStore((state) => state.setShowMobileNav);

  return (
    <div
      className={`grid place-content-center lg:hidden z-[100] bg-white fixed left-0 w-full h-screen top-0 right-0 box-border overflow-hidden`}
    >
      <FiX
        className="w-[30px] h-[30px] lg:hidden text-red-500 absolute right-4 top-4 cursor-pointer"
        onClick={() => {
          setOpenNav(false);
        }}
      />
      <ul
        className="flex flex-col justify-center gap-5 "
        style={{ fontFamily: "var( --font-family)" }}
      >
        {navList.slice(0, -1).map((list) => (
          <div key={list.id}>
            <li>
              <a
                href={`#${list.href}`}
                className="hover:text-[var(--blue-color)] transition text-lg"
                onClick={() => setOpenNav(false)}
              >
                {list.name}
              </a>
            </li>
          </div>
        ))}
      </ul>
      <a
        href={`#${navList[navList.length - 1].href}`}
        className=" py-[1rem] bg-[#121B4A] text-white rounded-md hover:opacity-90 lg:hidden 
        absolute left-1/2 top-[80%] -translate-x-1/2 w-[80%] text-center text-lg
        "
        onClick={() => setOpenNav(false)}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileNav;
