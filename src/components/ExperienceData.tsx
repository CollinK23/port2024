export type TExperience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  team?: string;
  image: string;
};

const ExperienceData = ({
  title,
  company,
  duration,
  location,
  team,
  image,
}: TExperience) => {
  return (
    <div
      className="flex flex-row space-x-4 pt-8 border-b border-steel"
      data-aos="fade-right"
    >
      <div className="w-[50px]">
        <img src={image} alt={company} />
      </div>
      <div className="pb-8 flex flex-col text-[14px] w-full">
        <div className="flex flex-row justify-between">
          <div className="text-white text-[16px] font-semibold">{company}</div>
          <div className="hidden sm:inline">{duration}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>{title}</div>
          <div className="hidden sm:inline">{location}</div>
        </div>
        <div className="sm:hidden inline">{duration}</div>
        <div className="sm:hidden inline">{location}</div>
        <div className="pt-4 text-white">{team}</div>
      </div>
    </div>
  );
};

export default ExperienceData;
