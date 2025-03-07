import Button from "./Button";
import LinkedinIcon from "../assets/images/Footer Icons/linkedin-brands-solid.svg";
import InstagramIcon from "../assets/images/Footer Icons/instagram-brands.svg";
import FacebookIcon from "../assets/images/Footer Icons/facebook-brands.svg";
const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="bg-gradient-to-b from-[#484C51] to-[#1E1E1E] text-white py-[3.1875rem] px-[2rem] w-full">
      <section className="flex flex-col md:flex-row lg:flex-row md:gap-[2rem] gap-[2.875rem]">
        <section className="flex flex-col lg:justify-between md:justify-between gap-3">
          <h1 className="font-medium text-[2rem] lg:text-[3rem] md:text-[2.5rem]">
            Creatiwise
          </h1>
          <p className="font-medium text-base lg:text-[1.25rem]">
            Crafting brands and building beautiful didgital experience...
          </p>
          <div className="mt-[1.9375rem] hidden md:flex lg:flex flex-col gap-3">
            <h1>Follow Us</h1>
            <div className="flex gap-[1.75rem]">
              <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
                <img src={LinkedinIcon} alt="" />
              </div>
              <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
                <img src={FacebookIcon} alt="" />
              </div>
              <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
                <img src={InstagramIcon} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full lg:justify-around md:gap-2 justify-between">
          <div className="flex flex-col gap-[1rem] lg:text-[1.25rem]">
            <h1 className="font-medium lg:text-[2.25rem] md:text-[1.8rem] text-[1.25rem]">
              About
            </h1>
            <div>Team</div>
            <div>Services</div>
            <div>Partners</div>
            <div>Privacy Policy</div>
          </div>
          <div className="flex flex-col gap-[1rem] lg:text-[1.25rem]">
            <h1 className="font-medium text-[1.25rem] lg:text-[2.25rem] md:text-[1.8rem]">
              Portfolio
            </h1>
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
      <div className="mt-[1.9375rem] flex md:hidden lg:hidden flex-col gap-3">
        <h1>Follow Us</h1>
        <div className="flex gap-[1.75rem]">
          <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
            <img src={LinkedinIcon} alt="" />
          </div>
          <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
            <img src={FacebookIcon} alt="" />
          </div>
          <div className="bg-white size-10 p-[.7rem] rounded-[50%] flex items-center justify-center">
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:mt-[7.6875rem] md:mt-[5rem] mt-7 text-center">
        Copyright @creatiwise <span>{currentYear}</span> All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
