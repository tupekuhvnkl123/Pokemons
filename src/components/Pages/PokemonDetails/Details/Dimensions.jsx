const Dimensions = ({ dimensions, experience }) => {
  const modifiedData = { ...dimensions, experience };

  return (
    <div className="flex w-full justify-between gap-x-5  phone:justify-center">
      {Object.entries(modifiedData).map(([key, value]) => (
        <div
          className="bg-white flex flex-col items-center justify-center h-[70px] w-[130px] rounded-lg shadow-md  smPhone:text-[12.5px]"
          key={key}
        >
          <p className="capitalize">{key}</p>
          <p className="opacity-55">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dimensions;
