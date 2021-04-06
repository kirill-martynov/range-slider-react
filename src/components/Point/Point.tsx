import React from "react";
import cn from "classnames";

import s from "./Point.module.css";

interface IProps {
  item: number;
  count: number;
  currentProgress: number;
  onChange: (progress: number) => void;
}

export const Point: React.FC<IProps> = ({
  item,
  count,
  currentProgress,
  onChange,
}) => {
  const progress = (100 / count) * (item + 1);

  const isActive = currentProgress > progress || currentProgress === progress;

  const handleClick = () => {
    onChange(progress);
  };

  return (
    <div
      className={cn(s.container, { [s.active]: isActive })}
      style={{ left: `${progress}%` }}
      onClick={handleClick}
    >
      <span className={s.name}>{item}</span>
    </div>
  );
};
