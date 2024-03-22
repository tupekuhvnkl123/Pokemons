const Stats = ({ stats }) => (
  <div className="flex flex-col gap-y-3 ">
    <h2 className="font-semibold">Stats</h2>
    <div className="flex flex-col gap-y-4 ">
      {stats.map((stat) => {
        const statColor = stat.value > 50 ? "bg-[#0FB900]" : "bg-[#ED6666]";
        const statValue = stat.value > 100 ? 100 : stat.value;

        return (
          <div
            key={stat.name}
            className="flex items-center  justify-between  gap-x-10 text-[15px] smPhone:text-[12px] smPhone:gap-x-5"
          >
            <p className="opacity-60 capitalize whitespace-nowrap">
              {stat.name}
            </p>
            <div className="flex items-center gap-x-4 justify-end">
              <p>{stat.value}</p>
              <div className="w-[190px] bg-black bg-opacity-20 h-[6px] rounded-xl smPhone:w-[clamp(100px,40vw,180px)]">
                <div
                  style={{ width: `${statValue}%` }}
                  className={`${statColor} h-full  rounded-xl `}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Stats;
