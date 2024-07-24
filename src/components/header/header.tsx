import React from "react";
import { Hero, Navbar } from "@/components";

const Header = () => {
  return (
    <div className="bg-[#F6EBDA] bg-[url('/bg_img_hero.svg'),_url('/bg_img_hero_2.svg')] bg-no-repeat bg-header">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
