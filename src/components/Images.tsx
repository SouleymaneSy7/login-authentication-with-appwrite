import React from "react";
import getRandomContent from "../utils/getRandomContents";

const Images: React.FC = () => {
  const imagesList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <section className="w-full max-w-[448px] mx-auto h-[210px] rounded-border-radius-sm mb-7 overflow-hidden md:max-w-[530px] md:h-[280px] lg:h-full lg:w-1/2  lg:mb-0 lg:rounded-none lg:max-w-none ">
      <img src={`../assets/images/${getRandomContent(imagesList)}.jpg`} alt="abstracts 3d images" />
    </section>
  );
};

export default Images;
