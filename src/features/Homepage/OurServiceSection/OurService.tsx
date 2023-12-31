"use client";

import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";
import withOurService from "./withOurService";
import { OurServiceProps } from "./interface";

const serviceList = [
  {
    name: "UX/UI design",
    image: "/images/ux-ui.png",
    detail:
      "Focusing on creating intuitive and visually appealing digital interfaces that enhance user experience and engagement",
  },
  {
    name: "Project solution consultancy",
    image: "/images/project-solution.png",
    detail:
      "Collaborating closely with clients to identify their unique challenges and requirements",
  },
  {
    name: "Web development",
    image: "/images/web-development.png",
    detail:
      "The process of building and maintaining websites, utilizing various programming languages and frameworks to create responsive and dynamic online platforms.",
  },
  {
    name: "Mobile development",
    image: "/images/mobile-development.png",
    detail:
      "Elevate your business with our mobile development expertise. We specialize in creating intuitive and customized mobile apps for both iOS and Android platforms.",
  },
  {
    name: "Digital marketing",
    image: "/images/digital-marketing.png",
    detail:
      "Unlock the full potential of your online presence with our digital marketing strategies. From SEO and social media marketing to targeted campaigns",
  },
  {
    name: "Digital transformation consultancy",
    image: "/images/digital-transformation-consultancy.png",
    detail:
      "We'll assess your current processes, define a tailored roadmap, and implement cutting-edge solutions to streamline operations and enhance customer experiences.",
  },
];

 const OurService = ({
  h1Ref,
  pref,
  divBtnRef,
  root,
}: OurServiceProps) => {
  return (
    <section
      className="relative py-12 md:py-[50px] mx-auto px-5 lg:px-[50px] sm:pt-0  bg-neutral-1000 "
      ref={root}
    >
      <div className="max-w-[1440px] m-auto">
        {/* title */}
        <div className="flex items-center flex-col mb-16">
          <h2
            className="text-2xl md:text-4xl font-semibold flex mb-7 text-center"
            ref={h1Ref}
          >
            <span className="text-white border-b-2 border-primary-100 underline underline-offset-3 decoration-8 decoration-primary-100">
              Services.
            </span>
          </h2>
          <div ref={pref}>
            <Paragraph
              className={`lg:max-w-[1000px] text-sm sm:text-md font-light text-white opacity-80 text-center`}
            >
              {`Explore our services tailored to elevate your business. We're here to provide the tools and expertise you need to succeed in the digital era. Your business, our priority.`}
            </Paragraph>
          </div>
        </div>

        {/* card */}

        <div className="flex flex-wrap justify-center gap-7" ref={divBtnRef}>
          {serviceList.map(
            (service: { name: string; image: string; detail: string }) => (
              <React.Fragment key={service.name}>
                <div className="relative sm:w-[45%] lg:w-[30%] max-w-[425px] border border-primary-50 hover:border-primary-100  min-h-auto sm:min-h-[500px] p-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-3  hover:shadow-[0_8px_30px_rgba(233,251,100,0.1)] group">
                  <h3 className="relative  text-xl sm:text-4xl font-semibold h-[70px] sm:h-[135px] text-white flex items-center justify-between">
                    <span className="max-w-[310px] text-transparent bg-clip-text bg-secondary-100">
                      {service.name}
                    </span>
                  </h3>
                  <p className="text-secondary-400 h-[50px] sm:h-[100px] mb-5 flex items-start text-sm sm:text-md font-light">
                    {service.detail}
                  </p>
                  <img
                    className="relative bottom-[-40px] transition-all duration-100 rounded-md grayscale-[50%] group-hover:grayscale-0"
                    src={service.image}
                    alt=""
                  />
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withOurService(OurService);
export default WrappedComponent;
