import { useContext } from "react";

import {
  StreakContainer,
  StreakDot,
  StreakDotActive,
} from "./streak-indicator.style";

import { GameContext } from "../../context/game.context";
const StreakIndicator = () => {
  const { currentStreak, maxStreak } = useContext(GameContext);
  return (
    <StreakContainer>
      {Array.from({ length: maxStreak }).map((_, i) => {
        const DotComponent = i < currentStreak ? StreakDotActive : StreakDot;
        return <DotComponent key={i} />;
      })}
    </StreakContainer>
  );
};

export default StreakIndicator;
