import { navList } from "@/utils/navListData";
import React from "react";

const LargeScreenNav = () => {
  return (
    <ul
      className="hidden lg:flex items-center gap-8 "
      style={{ fontFamily: "var( --font-family)" }}
    >
      {navList.slice(0, -1).map((list) => (
        <div key={list.id}>
          <li>
            <a
              href={`#${list.href}`}
              className="ml-2 hover:text-[var(--blue-color)] transition"
            >
              {list.name}
            </a>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default LargeScreenNav;
