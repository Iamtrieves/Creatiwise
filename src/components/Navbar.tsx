import Button from "./Button";
import { JSX } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:px-[5rem] p-[1.2rem] lg:py-[2rem] shadow-xl">
      <nav className="flex items-center justify-between">
        <div
          className="font-semibold lg:font-bold 
                text-[1.1rem] lg:text-[1.575rem] text-[#1E1E1E] 
                absolute left-1/2 -translate-x-1/2 
                md:relative md:left-14"
        >
          Creatiwise.
        </div>
        <div className="lg:flex md:flex hidden lg:gap-[3.75rem] md:gap-[2.3rem] lg:text-[1.25rem] md:text-[1rem] text-[#1E1E1E] align">
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Works</div>
          <div>Contact Us</div>
        </div>
        <div className="lg:flex md:flex hidden md:gap-[1rem] lg:gap-[2rem]">
          <Button
            className="text-[#FFFFFF] lg:py-[0.5375rem] md:py-[0.3375rem] lg:px-[1.2375rem] md:px-[0.7375rem] bg-black rounded-3xl scale lg:text-[1.1rem] md:text-[0.735rem]"
            text="Sign In"
          />
          <Button
            className="text-[#1E1E1E] lg:py-[0.5375rem] md:py-[0.3375rem] lg:px-[1.2375rem] md:px-[0.7375rem] border-[1.5px] scale border-black rounded-3xl md:text-[0.735rem] lg:text-[1.1rem]"
            text="Sign Up"
          />
        </div>
        <HamburgerMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
