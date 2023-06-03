import { ReactElement } from "react";

interface Prop {
  title: string;
  heading: ReactElement;
  description: string;
}

const SectionTitle = ({ title, heading, description }: Prop) => {
  return (
    <div
      className="flex flex-col items-center text-center gap-[15px] my-5"
      data-aos="fade-down"
    >
      <h2 className="text-[14px] lg:text-[16px] font-[500] text-[var(--red-color)] ">
        {title}
      </h2>
      <div className="text-[26px] lg:text-[35px] font-[600] lg:max-w-[50%]">
        {heading}
      </div>
      <p className="text-[14px]lg:text-[18px] text-[var(--gray-color)] font-[400] lg:max-w-[45%]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
