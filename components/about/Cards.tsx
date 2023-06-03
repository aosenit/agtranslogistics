import Image from "next/image";

interface Prop {
  src: string;
  title: string;
  content: string;
  delay: number;
}

const Cards = ({ src, title, content, delay }: Prop) => {
  return (
    <div
      className="w-full p-[30px] bg-[#F7F7F7]"
      data-aos="fade-up"
      data-aos-delay={`${delay * 30}`}
    >
      <Image
        src={src}
        alt={title + "icon"}
        width={48}
        height={48}
        className="w-[48px] h-[48px]"
      />
      <div className="flex flex-col mt-[36px] gap-[10px] ">
        <h4 className="text-[20px] font-[600]">{title}</h4>
        <p className="text-[var(--gray-color)]">{content}</p>
      </div>
    </div>
  );
};

export default Cards;
