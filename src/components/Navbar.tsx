import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[100]">
      <ul className="menu menu-horizontal bg-[#0000008f] rounded-box border border-steel blur-overlay">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            href="/CollinKimballResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
