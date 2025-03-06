import Rating from "./Rating";
import EvaWilliams from "../assets/images/Clients Feedback Images/evaImage.svg";
import JamesCollins from "../assets/images/Clients Feedback Images/jamesImage.svg";
import Button from "./Button";
const ClientsFeedbackSection: React.FC = () => {
  return (
    <div className="bg-white px-[1.2rem] py-[7.3125rem]">
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-center text-[1.25rem] md:text-[1.5rem]">
          What Our Clients Say About the US
        </h1>
        <section className="flex relative flex-col justify-center items-center mt-[6.625rem]">
          <div className="absolute bottom-[80%]">
            <img src={EvaWilliams} alt="" />
          </div>
          <div className="bg-[#E6E6E6] flex flex-col justify-center items-center pt-[5.0625rem] rounded-xl shadow-xl px-[1rem] pb-[1.625rem]">
            <h1 className="font-bold text-[1.75rem]">Eva Williams</h1>
            <p className="text-[1.5rem]">ALCA Constructions</p>
            <div className="flex flex-col justify-center items-center size-[]">
              <Rating width="160" height="32" />
            </div>
            <p className="text-justify">
              Creatiwise crafted an outstanding brand identity for our company,
              significantly benefiting us and making our brand stand out. We
              look forward to continuing our collaboration with them.
            </p>
          </div>
        </section>
        <section className="flex relative flex-col justify-center items-center mt-[6rem]">
          <div className="absolute bottom-[80%]">
            <img src={JamesCollins} alt="" />
          </div>
          <div className="bg-[#E6E6E6] flex flex-col justify-center items-center pt-[5.0625rem] rounded-xl shadow-xl px-[1rem] pb-[1.625rem]">
            <h1 className="font-bold text-[1.75rem]">James Collins</h1>
            <p className="text-[1.5rem]">Myle Mestro</p>
            <div className="flex flex-col justify-center items-center size-[]">
              <Rating width="160" height="32" />
            </div>
            <p className="text-justify">
              Creatiwise crafted an outstanding brand identity for our company,
              significantly benefiting us and making our brand stand out. We
              look forward to continuing our collaboration with them.
            </p>
          </div>
        </section>
        <div className="flex justify-end">
          <div>
            <Button
              text="Next"
              className="text-white bg-black py-2 px-[2rem] rounded-[3rem] text-center font-medium text-[100%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsFeedbackSection;
