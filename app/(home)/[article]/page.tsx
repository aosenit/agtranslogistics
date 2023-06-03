"use client";

import { articlesData } from "@/components/articles/articlesData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IArticle {
  id: number | null;
  title: string;
  content: string;
}

const page = ({ params }: any) => {
  const router = useRouter();

  return (
    <div className="container ">
      <div className="flex justify-between items-center h-[10vh] ">
        <Image
          width={100}
          height={50}
          alt="a&g logo"
          src={"/assets/logo-new.png"}
          className="w-[85px]"
          onClick={() => router.replace("/")}
        />
      </div>
      <div className="grid gap-8 py-5 lg:grid-cols-2 lg:py-10 lg:items-center lg:gap-12">
        <Image
          width={150}
          height={150}
          alt="a&g logo"
          src={"/assets/project-big.png"}
          className="w-full h-[200px] object-cover object-center lg:h-[400px]"
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-[600]">
            {articlesData[params.article - 1]?.title}
          </h3>
          <p className="text-base text-[var(--gray-color)]">
            {articlesData[params.article - 1]?.content}
          </p>
          <button className=" bg-white text-black hover:opacity-90 transition border-[1px] border-[black] py-[.7rem] rounded-[10px] lg:w-fit px-[2rem] lg:ml-auto">
            Interact with Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
