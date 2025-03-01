import HomeCards from "./HomeCards";

const ServicesSection = () => {
  return (
    <div className="mt-[4.5rem] lg:px-[4rem] px-[1.2rem]">
      <div className="flex flex-col gap-3 mb-[4rem] justify-center items-center lg:text-[1.875rem]">
        <div className="lg:text-[1.875rem] text-[1.4rem] font-medium">
          Our Services
        </div>
        <div className="font-bold text-[#1E1E1E] lg:text-[3.125rem] md:text-[2rem] lg:text-start md:text-start text-center text-[1.5rem]">
          What We Can Do For You
        </div>
      </div>
      <HomeCards />
    </div>
  );
};

export default ServicesSection;
