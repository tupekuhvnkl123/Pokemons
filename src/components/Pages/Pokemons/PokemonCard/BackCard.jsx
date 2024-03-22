import { useNavigate } from "react-router-dom";

const BackCard = ({ gif, name, stats }) => {
  const navigate = useNavigate();

  const exploreHandler = (e) => {
    e.stopPropagation();
    navigate(name);
  };

  return (
    <div className="z-20 absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex flex-col items-center justify-end gap-y-3 pb-4">
      <img className="max-h-[100px]" src={gif} alt={name} />
      <div className="flex flex-col items-center text-center justify-center">
        {stats.map((stat) => (
          <p className="text-sm" key={stat.name}>
            {stat.name} : {stat.value}
          </p>
        ))}
      </div>
      <button
        onClick={exploreHandler}
        className="bg-[#C12026] text-white py-1 px-3 rounded-md hover:scale-105 transition text-sm"
      >
        Explore {name}
      </button>
    </div>
  );
};

export default BackCard;
