import { TProject } from "./Projects";

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  web,
  github,
}: TProject) => {
  return (
    <div
      className="w-[326px] black__gradient rounded-lg border border-steel shadow pb-4 hover:scale-[101%] ease-in-out duration-500"
      data-aos="fade-in"
    >
      <div className="w-full h-[200px] relative overflow-hidden cursor-pointer">
        <div className="absolute inset-0 z-0">
          <a
            href={web ? web : github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-full w-full block"
          >
            <img src={image} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-[#000000b3] transition-opacity ease-in-out duration-500">
              <img
                src="/constants/github-icon.svg"
                className="w-[50px] h-[50px]"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full h-[150px] relative">
        <div className="absolute bottom-0 h-[150px] left-0 w-full p-4 z-20">
          <div className="text-[18px] text-teal font-semibold">{title}</div>
          <div className="text-[14px]">{description}</div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 px-4 pt-4">
          <div className="flex flex-row space-x-2 text-[14px]">
            {tech.map((t: string) => (
              <div className="bg-[#00000070] px-4 py-1 rounded-lg text-[10px] text-center border border-steel">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
