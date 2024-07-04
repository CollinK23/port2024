const About = () => {
  return (
    <div
      id="about"
      className="py-32 max-w-[1100px] flex justify-center flex-col mx-auto text-[16px] px-8"
      data-aos="fade-in"
    >
      <div className="font-medium text-left text-white font-semibold mb-[50px] text-[48px]">
        About
      </div>
      <div className="font-medium text-left text-teal mb-[50px] text-[18px]">
        WELCOME
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-left font-small leading-[40px] max-w-[600px]">
          My name is Collin Kimball, I am currently a senior at Oregon State
          University pursuing a degree in Computer Science with a focus in
          embedded systems.
        </div>
        <div className="hidden sm:flex sm:justify-center sm:justify-right">
          <ul className="list-none text-center sm:text-right font-small leading-[40px] ">
            <li>
              <a
                href="https://www.linkedin.com/in/collin-kimball-b004a622b"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CollinK23"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@collinkimball.com"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
