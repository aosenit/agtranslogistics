import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

interface IData {
  fullName: string;
  email: string;
  message: string;
}

const initialData: IData = {
  fullName: "",
  email: "",
  message: "",
};

const Form = () => {
  const [data, setData] = useState(initialData);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setData(initialData);
  };
  return (
    <form
      className="flex flex-col my-[50px] gap-4 lg:my-0 "
      data-aos-delay="240"
      data-aos="fade-down"
      onSubmit={handleSubmit}
    >
      <h4 className="text-[16px] font-[700]">Contact</h4>

      <div className="flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="FullName"
          className="h-[42px] w-full rounded-sm placeholder:text-[var(--gray-color)] px-4 py-2 text-black"
          onChange={handleChange}
          name="fullName"
          value={data.fullName}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="h-[42px] w-full rounded-sm placeholder:text-[var(--gray-color)] px-4 py-2 text-black"
          onChange={handleChange}
          name="email"
          value={data.email}
          required
        />
        <textarea
          onChange={handleChange}
          name="message"
          value={data.message}
          required
          placeholder="Message"
          className="resize-none h-[140px] w-full rounded-sm placeholder:text-[var(--gray-color)] px-4 py-2 text-black"
        ></textarea>
      </div>
      <button
        className="flex px-[25px] items-center gap-1 bg-[#1D2449] w-fit py-2 self-end mt-2"
        type="submit"
      >
        Send <FiSend className="" />
      </button>
    </form>
  );
};

export default Form;
