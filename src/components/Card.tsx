interface CardProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, bgColor }) => {
  return (
    <div
      className={`${bgColor} flex flex-col gap-[1.25rem] py-[2.875rem] px-[0.75rem] rounded-2xl`}
    >
      <div className="flex items-center gap-2">
        <div className="size-[4rem]">
          <img className="size-full" src={image} alt={title} />
        </div>
        <h1 className="lg:text-[1.5rem] font-semibold">{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};
export default Card;
