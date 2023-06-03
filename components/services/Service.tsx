import React from "react";
import SectionTitle from "../SectionTitle";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="container">
      <SectionTitle
        title={"Our Services"}
        heading={
          <h3>
            Tailored
            <span className="text-[var(--blue-color)]"> Solutions </span> to
            Fuel Your process Success.
          </h3>
        }
        description={
          "Fuel your process success with our tailored solutions in haulage, logistics, and fleet management. Experience seamless operations with our proficient team, ensuring swift, secure transport of goods"
        }
      />

      <div className="flex flex-col gap-[100px] mt-[120px]">
        <ServiceCard
          src="/assets/service-img-1.png"
          title="Haulage Service"
          content="  Experience the difference with our haulage services, designed for
          speed, safety, and cost-effectiveness. We ensure your goods, whether
          quarry products, petroleum, or dry bulk, reach their destination
          swiftly and intact. Leveraging state-of-the-art technology for
          tracking and communication, we offer secure, efficient transportation
          that you can rely on, nationwide. Enjoy peace of mind with our
          goods-in-transit insurance, as we take on the road to deliver value
          right to your doorstep."
        />

        <ServiceCard
          src="/assets/service-img-2.png"
          title="Fleet Management"
          content="Unlock efficiency and productivity with our comprehensive fleet management solutions. We empower your business with brand new, air-conditioned, unbranded vehicles driven by professional chauffeurs, and backed by robust maintenance support. Our services help you minimize risks, reduce downtime, and optimize the use of assets, relieving you of the administrative burden. Choose our fleet management service for a seamless, hassle-free experience that prioritizes your business needs."
          flexDirection={1}
        />

        <ServiceCard
          src="/assets/service-img-3.png"
          title="Logistics"
          content="Maximize your operational efficiency with our end-to-end logistics solutions. From door-to-door freight services to professional handling, we ensure your goods reach their destination promptly and securely. We manage risks efficiently and maintain a cordial relationship with our clients. Embrace the value of our logistics services, designed to reduce costs, increase speed to market, and provide exceptional service quality, transforming your business operations for the better."
        />
      </div>
    </div>
  );
};

export default Service;
