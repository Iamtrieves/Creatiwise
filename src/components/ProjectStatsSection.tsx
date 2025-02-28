import React from "react";
import DefineIcon from "../assets/images/defineIcon.svg";
import DesignIcon from "../assets/images/designIcon.svg";
import BuildIcon from "../assets/images/buildIcon.svg";
import LaunchIcon from "../assets/images/launchIcon.svg";

const ProjectStatsSection = (): React.ReactElement => {
  return (
    <div className="bg-white">
      <section className="lg:py-[1.4875rem] py-[1rem] text-white lg:text-[1.875rem] text-[1.275rem] flex justify-center items-center bg-gradient-to-r from-[#1E1E1E] to-[#6C7075]">
        Over 200+ Projects delivered
      </section>
      <section className="lg:pt-[7rem] pt-[4rem] lg:px-[4rem] px-[1.2rem] flex flex-col lg:gap-[2.5rem] gap-[1.5rem]">
        <section>
          <div className="font-bold lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-[#1E1E1E] text-center">
            About Creatiwise
          </div>
          <div className="text-[#1E1E1E] text-justify text-[0.875rem] lg:text-[1.2rem]">
            At Creatiwise, we provide exceptional technology solutions and
            services. We leverage our large knowledge base to deliver solutions
            and meet customers needs, business and budget expectations. We
            firmly believe in delivering customer solutions for all your needs.
            We make website development, Designing, Branding, Android/iOS App
            Development, Software Development and printing possible.
          </div>
        </section>
        <section className="flex justify-center flex-col mt-[1.625rem] gap-[1rem] items-center">
          <div className="font-bold text-[#1E1E1E] lg:text-[3.125rem] text-[2rem]">
            How We Work
          </div>
          <div className="text-center lg:text-[2rem] text-[1rem] text-white lg:p-2 p-[8px] rounded-2xl lg:w-[60%] w-[70%] bg-gradient-to-r from-[#1E1E1E] to-[#6C7075]">
            Design Driven Strategy Led
          </div>
        </section>
        <section className="flex lg:mt-[4rem] md:mt-[4rem] mt-[2rem] flex-col gap-[4rem]">
          <div className="flex lg:flex-row md:flex-row flex-col w-full gap-[2rem] items-center justify-center">
            <div className="lg:w-[20%] w-[8rem]">
              <img className="size-full" src={DefineIcon} alt="Define Icon" />
            </div>
            <div className="lg:w-[80%] flex flex-col lg:gap-[2.9375rem] gap-[0.7rem] w-full">
              <div className="font-bold lg:text-[2.25rem] text-[1rem] lg:text-start md:text-start text-center">
                1. Define
              </div>
              <div className="lg:text-[1.45rem] text-[1rem] text-justify">
                We prioritize your audience's needs, defining and converting
                their ideas into reality. We believe that sharing more
                information leads to better products.{" "}
                <span className="text-[#526AE8]">- Creatiwise</span>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col w-full gap-[2rem] items-center justify-center">
            <div className="lg:w-[20%] w-[8rem]">
              <img className="size-full" src={DesignIcon} alt="Design Icon" />
            </div>
            <div className="lg:w-[80%] flex flex-col lg:gap-[2.9375rem] gap-[0.7rem] w-full">
              <div className="font-bold lg:text-[2.25rem] text-[1rem] lg:text-start md:text-start text-center">
                2. Design
              </div>
              <div className="lg:text-[1.45rem] text-[1rem] text-justify">
                Design is key to capturing customer attention. We specialize in
                fresh, creative designs and have been helping clients with Brand
                identity since 2009. Our expertise includes Logo Design, Print
                Design, Stationery Design, Website Design, App Design, and
                illustration.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col w-full gap-[2rem] items-center justify-center">
            <div className="lg:w-[20%] w-[8rem]">
              <img className="size-full" src={BuildIcon} alt="Build Icon" />
            </div>
            <div className="lg:w-[80%] flex flex-col lg:gap-[2.9375rem] gap-[0.7rem] w-full">
              <div className="font-bold lg:text-[2.25rem] text-[1rem] lg:text-start md:text-start text-center">
                3. Build
              </div>
              <div className="lg:text-[1.45rem] text-[1rem] text-justify">
                Breath new life into your body brand by introducing it to the
                digital world. We turn the impossible into reality for our
                customers. "It always seems impossible until it's done."{" "}
                <span className="text-[#526AE8]">- Nelson Mandela</span>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col w-full gap-[2rem] items-center justify-center">
            <div className="lg:w-[20%] w-[8rem]">
              <img className="size-full" src={LaunchIcon} alt="Launch Icon" />
            </div>
            <div className="lg:w-[80%] flex flex-col lg:gap-[2.9375rem] gap-[0.7rem] w-full">
              <div className="font-bold lg:text-[2.25rem] text-[1rem] lg:text-start md:text-start text-center">
                4. Launch
              </div>
              <div className="lg:text-[1.45rem] text-[1rem] text-justify">
                Breath new life into your brand by introducing it to the digital
                world. We turn the impossible into reality for our customers.
                "It always seems impossible until it's done."{" "}
                <span className="text-[#526AE8]">- Nelson Mandela</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectStatsSection;
