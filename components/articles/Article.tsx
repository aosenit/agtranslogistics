import React from "react";
import SectionTitle from "../SectionTitle";
import { articlesData } from "./articlesData";
import { useRouter } from "next/navigation";

const Article = () => {
  const router = useRouter();
  return (
    <div className="container">
      <SectionTitle
        title={"Articles"}
        heading={
          <h3>
            Discover the Core Principles Driving Our Unmatched Professionalism.
          </h3>
        }
        description={
          "Explore the foundational principles that shape our commitment to exceptional professionalism in logistics, haulage, and fleet management services. "
        }
      />

      {/* Articles */}
      <div className="flex flex-col my-[90px] gap-[60px] lg:grid lg:grid-cols-3">
        {articlesData.map(({ id, title, content }) => {
          return (
            <div
              className="flex flex-col gap-[15px]"
              key={id}
              data-aos="fade-up"
              data-aos-delay={`${id * 30 + 100}`}
              onClick={() => router.replace(`${id}`)}
            >
              <h3 className="text-[22px] lg:text-[24px] font-[700]">{title}</h3>
              <p className="text-[16px] font-[500] text-[var(--gray-color)]">
                {content.slice(0, 200)}
                <span className="text-[var(--blue-color)] cursor-pointer">
                  ... Learn more
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
