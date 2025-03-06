import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="bg-gradient-to-b from-[#484C51] to-[#1E1E1E] text-white py-[3.1875rem] px-[2rem] ">
      <section className="flex flex-col gap-[2.875rem]">
        <section className="flex flex-col gap-3">
          <h1 className="font-medium text-[2rem]">Creatiwise</h1>
          <p className="font-medium text-base w-[80%]">
            Crafting brands and building beautiful didgital experience...
          </p>
        </section>
        <section className="flex justify-between">
          <div>
            <h1 className="font-medium text-[1.25rem]">About</h1>
            <div>Team</div>
            <div>Services</div>
            <div>Partners</div>
            <div>Privacy Policy</div>
          </div>
          <div>
            <h1 className="font-medium text-[1.25rem]">Portfolio</h1>
            <div>Branding</div>
            <div>Illustration</div>
            <div>UI/UX Designs</div>
            <div>Android/iOS APP</div>
            <div>Frontend Development</div>
            <div>Software Development</div>
          </div>
        </section>
        <section className="flex flex-col gap-[1.9375rem]">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[1.25rem]">Contact US</h1>
            <p>hello@creatiwise.com Bandra West, Mumbai 400050</p>
          </div>
          <div>
            <Button
              text="Get In Touch"
              className="text-white text-[1.5rem] font-medium bg-black py-[1.0625rem] w-full rounded-2xl"
            />
          </div>
        </section>
      </section>
      <div className="mt-[1.9375rem] flex flex-col gap-2">
        <h1>Follow Us</h1>
        <div className="flex gap-[1.75rem]">
          <div className="bg-white size-10 p-2 rounded-[50%] flex items-center justify-center">
            <FaLinkedin className="size-full object-contain" />
          </div>
          <div className="bg-white size-10 rounded-[50%] flex items-center justify-center">
            <FaFacebook />
          </div>
          <div className="bg-white size-10 rounded-[50%] flex items-center justify-center">
            <FaInstagram />
          </div>
        </div>
      </div>
      <div>
        Copyright @creatiwise <span>{currentYear}</span> All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
