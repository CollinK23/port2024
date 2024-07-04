import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Glow from "./Glow";
import About from "./About";
import Experience from "./Experience";
import { InfiniteMovingCards } from "./InfiniteCards";
import Projects from "./Projects";
import { LampContainer } from "./Lamp";
import { Spotlight } from "./Stoplight";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

type Props = {
  items: { name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

const languages: Props = {
  items: [
    {
      name: "Python",
    },
    { name: "C" },
    {
      name: "C++",
    },
    { name: "Javascript" },
    { name: "Typescript" },
  ],
  direction: "left",
  speed: "normal",
  pauseOnHover: true,
  className: "custom-animation-class",
};

const frameworks: Props = {
  items: [
    {
      name: "React",
    },
    { name: "Redux" },
    { name: "Node" },
    { name: "Django" },
  ],
  direction: "right",
  speed: "normal",
  pauseOnHover: true,
  className: "custom-animation-class",
};

const Homepage = () => {
  return (
    <div className="bg-obsidian">
      <div className="relative z-10">
        <div className="flex justify-center pt-6 -mb-20">
          <Navbar />
        </div>
        <Hero />
        <About />
        <Experience />
        {/* <InfiniteMovingCards
          items={languages.items}
          direction={languages.direction}
          speed={languages.speed}
          pauseOnHover={languages.pauseOnHover}
          className={languages.className}
        />
        <InfiniteMovingCards
          items={frameworks.items}
          direction={frameworks.direction}
          speed={frameworks.speed}
          pauseOnHover={frameworks.pauseOnHover}
          className={frameworks.className}
        /> */}
        {/* <LampContainer children={undefined} /> */}

        <Projects />
        <Footer />
      </div>
      <div className="absolute grid__bg min-h-screen w-full top-0 z-5"></div>
      <div className="z-0">
        <Glow />
        <div className="flex sm:hidden absolute z-[1] w-[30%] h-[30%] -left-[20%] top-[15%] rounded-full overflow-hidden teal__gradient" />
        <div className="flex sm:hidden absolute z-[0] w-[60%] h-[60%] -left-[52%] top-[15%] rounded-full overflow-hidden purple__gradient" />
      </div>
    </div>
  );
};

export default Homepage;
