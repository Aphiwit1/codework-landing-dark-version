import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";

const serviceList = [
  {
    name: "Seamoor marine",
    detail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  },
  {
    name: "Seamoor marine",
    detail:
      "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  },
  {
    name: "Seamoor marine",
    detail:
    "Develop an internal system for a marine and logistics company, optimizing operations, tracking shipments, and facilitating efficient communication.",
  },
];

export const OurProject = () => {
  return (
    <section className="relative md:py-[50px] mx-auto lg:px-[50px] sm:pt-0  bg-secondary-1000 ">
      <div className=" m-auto">
        {/* title */}
        <div className="flex items-center flex-col mb-16  ">
          <h2 className="text-lg md:text-4xl font-semibold flex mb-5 text-center">
            <span className="text-primary-100 border-b-2 border-primary-100 ">
              PROJECTS
            </span>
          </h2>
          <Paragraph
            className={`lg:max-w-[1000px] text-lg text-white text-center font-light `}
          >
            At CodeWork, we believe in the power of collaboration. That's why
            we've teamed up with industry-leading partners who share our vision
            for innovation and excellence. Together, we bring you cutting-edge
            solutions that propel your business into the future. Explore our
            network of trusted partners who help us deliver the technology
            solutions you can rely on.
          </Paragraph>
        </div>

        {/* card */}

        <div className="flex flex-wrap justify-center gap-5">
          {serviceList.map((service: any) => (
            <React.Fragment key={service.name}>
              <div className="relative  grid grid-cols-5 gap-x-7 bg-[#172D27]  p-6 rounded-xl">
                {/* content */}
                <div className="flex flex-col justify-center col-start-1 col-span-2">
                  <h3 className="relative text-5xl font-semibold  text-[#59ADA0] flex items-center justify-between mb-5">
                    <span className="">{service.name}</span>
                  </h3>
                  <p className="text-white flex items-center text-lg font-light mb-14">
                    {service.detail}
                  </p>

                  <div className="flex justify-end items-center text-white text-lg gap-x-2">
                    <span>See more </span>
                    <span className="text-2xl">
                      <BsArrowRightCircle />
                    </span>
                  </div>
                </div>

                {/* img */}
                <div className="col-start-3 col-span-3 p-10 bg-gradient-to-t  from-[#59ADA0]  via-[#172D27] 30%     rounded-md ">
                  <img
                    className=" rounded-md max-w"
                    src="/images/computer-bg.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
