import Button from "./Button";
import PortfolioBgImage from "../assets/images/Portfolio Section Images/portfolioImage.svg";
import CaretRightIcon from "../assets/images/Portfolio Section Images/CaretRightIcon.svg";

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-[#D9D9D9] lg:px-[2.8rem] md:px-[2.8rem] px-[1rem] lg:py-[6rem] md:py-[6rem] py-[2rem]">
      <div>
        <div className="font-bold lg:text-[3.125rem] md:text-[2.5rem] p-3 text-[2rem] text-[#1E1E1E] text-center">
          Our Portfolio
        </div>
        <div className="size-full z-10">
          <img className="object-cover" src={PortfolioBgImage} alt="" />
        </div>
        <div className="bg-white flex flex-col gap-[2.625rem] shadow-xl rounded-b-xl mx-[1.5%] mt-[-2.5%] lg:px-[6.375rem] md:px-[5rem] px-[1rem] md:py-[4rem] py-[2rem] lg:py-[6rem]">
          <div className="flex justify-between items-center">
            <div className="font-semibold lg:text-[2.5rem] md:text-[2rem] text-[1rem]">
              TRISTANCE BANCE
            </div>
            <div className="lg:size-[6rem] lg:block md:block hidden md:size-[4rem] size-[2.1rem]">
              <img
                className="size-full object-cover"
                src={CaretRightIcon}
                alt=""
              />
            </div>
          </div>
          <div className="flex lg:gap-[4.1875rem] md:gap-[3rem] gap-[1.5rem]">
            <Button
              text="UI/UX Design"
              className="text-[#E5622C] button lg:w-[25vw] md:w-[25vw] w-1/2 lg:py-[1.575rem] md:py-[1rem] py-[0.5rem] lg:px-[0rem] md:px-[0rem] px-[1rem] font-medium lg:text-[2rem] md:text-[1.2rem] text-[100%] lg:rounded-2xl md:rounded-2xl rounded-[2rem] border-[#E5622C] border-[1px]"
            />
            <Button
              text="Frontend Dev"
              className="text-[#E5622C] button lg:w-[25vw] md:w-[25vw] w-1/2 lg:py-[1.575rem] md:py-[1rem] py-[0.5rem] px-[1rem] lg:px-[0rem] md:px-[0rem] font-medium lg:text-[2rem] md:text-[1.2rem] text-[100%] lg:rounded-2xl md:rounded-2xl rounded-[2rem] border-[#E5622C] border-[1px]"
            />
          </div>
        </div>
        <div className="mt-[1.9375rem] lg:hidden md:hidden block">
          <div className="size-full z-10">
            <img className="object-cover" src={PortfolioBgImage} alt="" />
          </div>
          <div className="bg-white flex flex-col gap-[2.625rem] shadow-xl rounded-b-xl mx-[1.5%] mt-[-2.5%] lg:px-[6.375rem] md:px-[5rem] px-[1rem] md:py-[4rem] py-[2rem] lg:py-[6rem]">
            <div className="flex justify-between items-center">
              <div className="font-semibold lg:text-[2.5rem] md:text-[2rem] text-[1rem]">
                Mr Vase
              </div>
              <div className="lg:size-[6rem] lg:block md:block hidden md:size-[4rem] size-[2.1rem]">
                <img
                  className="size-full object-cover"
                  src={CaretRightIcon}
                  alt=""
                />
              </div>
            </div>
            <div className="flex lg:gap-[4.1875rem] md:gap-[3rem] gap-[1.5rem]">
              <Button
                text="UI/UX Design"
                className="text-[#E5622C] button lg:w-[25vw] md:w-[25vw] w-1/2 lg:py-[1.575rem] md:py-[1rem] py-[0.5rem] lg:px-[0rem] md:px-[0rem] px-[1rem] font-medium lg:text-[2rem] md:text-[1.2rem] text-[100%] lg:rounded-2xl md:rounded-2xl rounded-[2rem] border-[#E5622C] border-[1px]"
              />
              <Button
                text="Frontend Dev"
                className="text-[#E5622C] button lg:w-[25vw] md:w-[25vw] w-1/2 lg:py-[1.575rem] md:py-[1rem] py-[0.5rem] px-[1rem] lg:px-[0rem] md:px-[0rem] font-medium lg:text-[2rem] md:text-[1.2rem] text-[100%] lg:rounded-2xl md:rounded-2xl rounded-[2rem] border-[#E5622C] border-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[15.3px] lg:flex md:flex hidden justify-end mt-[5.6875rem]">
        <div>
          <Button
            text="View All"
            className="border-black border-[2px] text-black bg-transparent py-2 px-[2.5rem] rounded-2xl text-center font-medium text-[1.5rem]"
          />
        </div>
      </div>
      <div className="mx-[15.3px] lg:hidden md:hidden flex justify-end mt-[1.6875rem]">
        <div>
          <Button
            text="See All >>"
            className="text-white bg-black py-2 px-[1.5rem] rounded-[3rem] text-center font-medium text-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
