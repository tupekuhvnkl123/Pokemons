const PokemonLoader = () => {
  return (
    <div className="relative w-[100px] h-[100px] bg-white rounded-full border-[5px] border-black overflow-hidden animate-spin">
      <div className="absolute w-[100%] h-[50%] bg-red-500 border-b-[5px] border-black top-[0]" />
      <div className="absolute bg-white w-[30px] h-[30px] border-[5px] border-black rounded-full top-[50%] right-[50%] z-10 translate-y-[-50%] translate-x-[50%]"></div>
    </div>
  );
};

export default PokemonLoader;
