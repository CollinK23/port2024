import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen mt-16">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-[6em] font-medium text-white">
              Collin Kimball
            </h1>
            <p className="pb-6 text-[16px] max-w-lg px-4 mx-auto">
              Software Engineer and Computer Science student at Oregon State
              University with a focus on embedded systems.
            </p>
            <div className="flex flex-row mx-auto justify-center space-x-2">
              <MainButton text="Resume" linkTo="CollinKimballResume.pdf" />
              <SecondaryButton text="Projects" linkTo="#projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
