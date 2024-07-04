import ExperienceData from "./ExperienceData";
import { TExperience } from "./ExperienceData";

const experiences: TExperience[] = [
  {
    title: "Software Engineer Intern",
    company: "GoDaddy",
    duration: "Jun 2024 - Present",
    location: "Tempe, AZ",
    team: "Website Builder Team",
    image:
      "https://media.licdn.com/dms/image/C560BAQFBubd4youVzg/company-logo_100_100/0/1636569873716/godaddy_logo?e=1727308800&v=beta&t=R92AZ_DEr7vtVkjg2_iYmi7tcRwFv3nKME_3-IHtvlQ",
  },
  {
    title: "Software Engineer Intern",
    company: "Astranis Space Technologies",
    duration: "Mar 2024 - Jun 2024",
    location: "San Francisco, CA",
    team: "Network and Payload Software team",
    image:
      "https://media.licdn.com/dms/image/D4D0BAQEg0LeDzkmvsw/company-logo_100_100/0/1708987615916/astranis_logo?e=1727308800&v=beta&t=1MiZUh1E7mFEMk3bV8JslTzTcM9l-08CZ0ocXhSwH_M",
  },
  {
    title: "Graphic Design Intern",
    company: "Kansas City Pioneers",
    duration: "Jun 2021 - Jun 2022",
    location: "Remote",
    image:
      "https://media.licdn.com/dms/image/C560BAQFfZRkbsWHv6w/company-logo_100_100/0/1630670527907/kansas_city_pioneers_esports_logo?e=1727308800&v=beta&t=BHyjWhKEYGWC7l_MCI5vNRcfG1P87shrOHcjq0B4gMk",
  },
];

const Experience = () => {
  return (
    <div className="pb-32 max-w-[1100px] flex justify-center flex-col mx-auto px-8">
      <div className="font-medium text-left text-teal mb-[50px] text-[18px]">
        EXPERIENCE
      </div>
      {experiences.map((exp: TExperience) => {
        return (
          <ExperienceData
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            location={exp.location}
            team={exp.team}
            image={exp.image}
          />
        );
      })}
    </div>
  );
};

export default Experience;
