const Abilities = ({ abilities }) => (
  <div className="flex flex-col gap-y-2">
    <h2 className="">Abilities</h2>
    <div className="flex gap-x-5">
      {abilities.map((ability) => (
        <p
          className="py-1 px-3 text-sm bg-pokemon_blue text-white rounded-3xl"
          key={ability}
        >
          {ability}
        </p>
      ))}
    </div>
  </div>
);

export default Abilities;
