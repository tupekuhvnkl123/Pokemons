import logoImage from "../../../assets/Logo.png";
import backgroundImage from "../../../assets/backgroundImage.png";

const Preview = () => (
  <section
    className="bg-cover bg-center h-[450px] phone:h-[75dvh]"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full w-full bg-primary_color bg-opacity-70 flexCenter px-[5%] gap-x-[10%] phone:flex-col phone:gap-y-20">
      <img
        className="w-[45%] object-cover object-center phone:w-[90%]"
        src={logoImage}
        alt="Logo"
      />
      <p className="w-[45%] text-center text-secondary_color font-bold xl:text-[clamp(10px,1.5vw,16px)] phone:!text-[13px] phone:w-[90%] ">
        Welcome to my Pokemon website! Dive into the captivating details of
        every Pokemon, from their unique abilities and evolutionary paths to
        their fascinating types and captivating appearances. Discover Pokedex
        entries, stats, artwork, and more. Embark on a journey of discovery in
        the vibrant world of Pokemon!
      </p>
    </div>
  </section>
);

export default Preview;
