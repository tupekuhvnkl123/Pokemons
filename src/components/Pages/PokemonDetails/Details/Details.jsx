import Abilities from "./Abilities";
import Dimensions from "./Dimensions";
import Stats from "./Stats";

const Details = ({ stats, abilities, dimensions, experience }) => {
  return (
    <section className="flex flex-col gap-y-14 w-[400px] phone:w-full phone:items-center">
      <Abilities abilities={abilities} />
      <Dimensions dimensions={dimensions} experience={experience} />
      <Stats stats={stats} />
    </section>
  );
};

export default Details;
