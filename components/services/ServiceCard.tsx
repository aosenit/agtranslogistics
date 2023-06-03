import Image from "next/image";
import React from "react";
interface Prop {
  src: string;
  title: string;
  content: string;
  flexDirection?: number;
}

const ServiceCard = ({ src, title, content, flexDirection = 2 }: Prop) => {
  return (
    <div
      className={`flex flex-col gap-[35px] lg:grid lg:grid-cols-2 lg:gap-[100px] lg:items-center lg:grid-flow-dense`}
    >
      <div
        className="h-[275px] lg:h-[375px] rounded-[10px] overflow-hidden"
        data-aos="fade-right"
        style={{ gridColumn: flexDirection === 1 ? 2 : 1 }}
      >
        <Image
          src={src}
          alt="service image"
          width={374}
          height={275}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={`flex flex-col gap-[12px] `}
        style={{ gridColumn: flexDirection }}
        data-aos="fade-left"
      >
        <h3 className="text-[26px] lg:text-[32px] font-[600]">{title}</h3>
        <p className="text-[16px] font-[400] text-[var(--gray-color)]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
