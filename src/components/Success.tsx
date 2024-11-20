import React from "react";

import { type SuccessPagePropsType } from "../types";

import getRandomContent from "../utils/getRandomContents";
import Heading from "./common/Heading";
import Buttons from "./common/Button";

const Success: React.FC<SuccessPagePropsType> = ({ user, signOut }) => {
  const welcomeMessages = [
    "🎩 You’re in! But don’t get too comfy… there’s no VIP lounge here!",
    "🧑‍🚀 Welcome to the inside! It's… well, exactly like the outside.",
    "🎉 You’ve unlocked… nothing special! But hey, the login worked!",
    "⚡ You’re now part of the ‘Logged In Legends Club’! Perks include… well, you’re looking at it.",
    "💻 Welcome to the exclusive area. Contents? Nonexistent. Vibes? Immaculate.",
    "🥳 Congratulations! You’re officially logged in. That’s all we got, but it’s something!",
    "🚀 Login successful! The reward? A sense of accomplishment and absolutely nothing else.",
    "👀 Well, you’re in. And that’s about it. Enjoy the view… of the exact same page!",
    "🍾 Welcome, intrepid explorer! You’ve reached… well, basically just the login screen, but with pride.",
    "🤔 You made it in! Not much to see here, but think of it as a minimalist dashboard.",
  ];

  return (
    <main>
      <Heading
        level="h1"
        className="text-fs-heading-lg text-center font-fw-semi-bold"
      >
        Welcome 👋, {user?.name}
      </Heading>
      <p className="text-center">{getRandomContent(welcomeMessages)}</p>
      <Buttons type="button" onClick={signOut}>
        Sign Out
      </Buttons>
    </main>
  );
};

export default Success;
