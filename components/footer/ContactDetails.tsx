import React from "react";

const ContactDetails = () => {
  return (
    <div
      className="flex flex-col gap-[50px]"
      data-aos-delay="210"
      data-aos="fade-down"
    >
      <div className="">
        <h6 className="text-[16px] font-[500]">Head Office</h6>
        <p className="text-[var(--gray-color)] text-[16px] font-[400]">
          Head Office: No 6b, Bendel Close Bishop Aboyade Cole Street, Victoria
          Island, Lagos, Nigeria
        </p>
      </div>

      <div className="">
        <h6 className="text-[16px] font-[500]">Operational Office:</h6>
        <p className="text-[var(--gray-color)] text-[16px] font-[400]">
          Km 20 Sagamu-Ikorodu Road, By Lafarge African Plc. Sagamu, Ogun State,
          Nigeria
        </p>
      </div>

      <div className="">
        <h6 className="text-[16px] font-[500]">Contact us:</h6>
        <p className="text-[var(--gray-color)] text-[16px] font-[400]">
          Email: info@aandgtransport.com / andglogistics@gmail.com Telephone:
          07080057473, 08139664549, 08038517312
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
