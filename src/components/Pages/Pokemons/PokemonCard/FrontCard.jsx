const FrontCard = ({ image, name, types }) => (
  <div className="rounded-lg absolute backface-hidden w-full h-full flex flex-col items-center justify-center gap-y-3 overflow-hidden">
    <img className="h-[130px] z-10" src={image} alt={name} />
    <p className="text-[21px] z-10 text-center">{name}</p>
    <p className="text-xs">*Click for more details</p>
    <div className="flex items-center justify-center gap-x-2 z-10">
      {types.map((type) => (
        <p className="bg-pokemon_blue text-white px-2 rounded-lg" key={type}>
          {type}
        </p>
      ))}
    </div>
    <img
      className="absolute h-full w-full top-0 left-0 scale-[350%] object-cover blur-[45px] z-0"
      src={image}
      alt={name}
    />
  </div>
);

export default FrontCard;
