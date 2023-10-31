import Paragraph from "@/components/typography/paragraph/Paragraph";
import React from "react";

export default function ProjectSeamoor() {
  return (
    <section className="relative md:py-[50px] mx-auto bg-neutral-1000  ">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center  items-start lg:items-center">
        <div className="w-[90%] lg:w-1/2">
            <picture>
            <source
              srcSet="/images/projectPage/seamour-project-cover.webp"
              type="image/webp"
            />
            <img
              src="/images/projectPage/seamour-project-cover.jpg"
              alt="seamour-project-cover."
              title="seamour-project-cover."
              loading="lazy"
              className="w-full rounded-e-full"
            />
          </picture>
        </div>

        <div className="w-full lg:w-1/2 pr-5 px-5 lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl  text-primary-100 font-semibold  mb-5 flex items-center gap-x-2">
            <a
              className="grayscale-[50%] group-hover:grayscale-0 w-[100px] h-[100px]   bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all  hover:shadow-lg whitespace-nowrap"
              href=""
              target="_blank"
              rel="noopener nofollow"
            >
              <img
                src="/logo/our-partner/semour.png"
                width={0}
                height={0}
                className={`h-auto w-[90%] p-3 `}
                alt={`xxx`}
              />
            </a>
            <span>Seamoor marine</span>
          </h2>
          {/* tag */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              Project solution consultancy
            </span>

            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              UX/UI Design
            </span>

            <span className="bg-neutralVariant-50  rounded-full text-center py-2 px-2 text-[10px] sm:text-xs shadow-md">
              Web development
            </span>
          </div>

          {/* p */}
          <Paragraph className="text-base font-light opacity-80 text-white mb-5">
            {` Develop an internal system for a marine and logistics company,
            optimizing operations, tracking shipments, and facilitating
            efficient communication.`}
          </Paragraph>

          <div className="text-base font-light opacity-80 text-white mb-5">
            <h3 className="font-semibold mb-2">Pain point</h3>
            <ul>
              <li className="mb-2">
                {` - Difficulty with Offline System: The current offline system
                presents challenges in efficiently locating and tracking
                documents, leading to a time-consuming and frustrating user
                experience.`}
              </li>

              <li>
                {` - Incompatible Third-Party Tools: The current third-party tools
                don't align with the client's specific requirements, resulting
                in functional gaps and integration issues that hinder workflow
                and productivity.`}
              </li>
            </ul>
          </div>

          <div className="text-base font-light opacity-80 text-white">
            <h3 className="font-semibold mb-2">Solution</h3>
            <ul>
              <li className="mb-2">
                {` - Streamline and digitize all processes, transitioning from
                offline to online platforms for enhanced trackability and
                efficiency.`}
              </li>

              <li className="mb-2">
                {`- Tailor the software that perfectly aligns with the client's
                unique requirements, ensuring a seamless and user-friendly
                experience.`}
              </li>

              <li>
                {`  - Offer guidance and support to facilitate a smooth transition
                during software implementation.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}