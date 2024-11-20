import React from "react";
import getRandomContent from "../utils/getRandomContents";

const Videos: React.FC = () => {
  const videoList = ["1", "2", "3", "4", "5", "6"];

  return (
    <section>
      <video
        loop
        muted
        autoPlay
        src={`/src/assets/videos/${getRandomContent(videoList)}.mp4`}
      ></video>
    </section>
  );
};

export default Videos;
