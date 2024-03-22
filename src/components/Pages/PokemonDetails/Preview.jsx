import ImagesSwiper from "./ImagesSwiper";

const Preview = ({ id, name, image, types, gif, extraImages }) => (
  <section className="flex flex-col gap-y-7 w-[250px] phone:w-full phone:items-center">
    <div className="flex gap-x-5 z-10">
      <h1 className="capitalize text-3xl font-semibold tracking-wide">
        {name}
      </h1>
      <p className="font-semibold opacity-50 text-lg">#{id}</p>
    </div>
    <div className="flex items-center gap-x-5 z-10">
      {types.map((type) => (
        <div
          key={type}
          className="py-0.5 px-3 rounded-2xl relative overflow-hidden"
        >
          <p className="z-10 relative text-primary_color">{type}</p>
          <img
            className="absolute h-full w-full top-0 left-0 object-cover blur-[10px] scale-[200%] z-0"
            src={image}
            alt={name}
          />
        </div>
      ))}
    </div>
    <div className="relative flex items-center justify-center">
      <img
        className="z-10 relative object-cover h-[200px] object-center mt-5 overflow-visible"
        src={gif}
        alt={name}
      />
      <img
        className="absolute top-50 left-50 object-cover blur-[20px] scale-[300%] z-0 w-[150px] h-[150px] pointer-events-none"
        src={image}
        alt={name}
      />
    </div>
    <div className="flex flex-col gap-y-3 mt-5 w-[250px]">
      <p className="text-xs font-semibold opacity-55">*Additional images</p>
      <ImagesSwiper imgaes={extraImages} />
    </div>
  </section>
);

export default Preview;
