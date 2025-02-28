import React from "react";
import GetStartedIcon from "../assets/images/getStartedIcon.svg";
import WomanImage from "../assets/images/womanImage.svg";
import GreenBackground from "../assets/images/greenBackground.svg";
import PurpleBackground from "../assets/images/purpleBackground.svg";
import FrontEndDevIcon from "../assets/images/frontendDev.svg";
import UIDesignIcon from "../assets/images/uiDesignIcon.svg";
import BrandingIcon from "../assets/images/brandingIcon.svg";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = (): React.ReactElement => {
  return (
    <div className="relative hero">
      <section className="flex lg:flex-row md:flex-row flex-col justify-between items-center z-10">
        <div className="lg:pl-[4rem] md:pl-[2rem] p-[1rem] flex-1 flex flex-col gap-2.5 md:gap-3 lg:gap-5">
          <motion.div
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#6C7075] font-semibold text-[1.5rem]  lg:text-[3.5625rem] md:text-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Your Big Ideas Into Beautiful Digital Experience
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[#1E1E1E] lg:text-[1.2rem] text-[1rem]"
          >
            Crafting brands and building beautiful digital experiences to meet
            customer's and user's need.
          </motion.div>
          <div>
            <Button
              text="Let's Get Started!"
              className="bg-black py-2 px-4 lg:text-[1.2rem] text-[1rem] rounded-xl text-white flex flex-row gap-1 items-center"
              icon={
                <div className="lg:size-6 size-5">
                  <img
                    className="size-full object-cover"
                    src={GetStartedIcon}
                  />
                </div>
              }
              iconPosition="right"
            />
          </div>
        </div>
        <div className="flex-1 relative flexChild">
          <div className="absolute frontEndStack size-45 top-70 left-40">
            <img className="size-full" src={FrontEndDevIcon} alt="" />
          </div>
          <div className="absolute uiDesignStack size-45 top-110 -left-15">
            <img className="size-full" src={UIDesignIcon} alt="" />
          </div>
          <div className="absolute brandingStack size-45 left-69 top-104">
            <img className="size-full" src={BrandingIcon} alt="" />
          </div>
          <div className="">
            <img className="size-full" src={WomanImage} alt="Woman Image" />
          </div>
        </div>
      </section>
      <section className="lg:flex md:flex hidden justify-between items-center heroBottomBackground absolute w-full top-120 -z-10">
        <div>
          <img src={GreenBackground} alt="" />
        </div>
        <div>
          <img src={PurpleBackground} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
