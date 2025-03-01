import Card from "./Card";
import { cards } from "../../cards";

const HomeCards: React.FC = () => {
  const bgColors = [
    "bg-[#A7A5FD]",
    "bg-[#86AFFB]",
    "bg-[#CBFCB0]",
    "bg-[#95D1C5]",
    "bg-[#CBAEDE]",
    "bg-[#A6C3F9]",
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-[2.75rem] lg:gap-4">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          bgColor={bgColors[index % bgColors.length]}
        />
      ))}
    </div>
  );
};

export default HomeCards;
