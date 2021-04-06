import React from "react";

import { Point } from "../Point";

import s from "./Line.module.css";

interface IProps {
  scale: number[];
}

export const Line: React.FC<IProps> = ({ scale }) => {
  const [progress, setProgress] = React.useState<number>(0);

  return (
    <div className={s.container}>
      <div className={s.bar}>
        {scale.map((item) => {
          return (
            <Point
              key={`item-${item}`}
              item={item}
              count={scale.length}
              currentProgress={progress}
              onChange={setProgress}
            />
          );
        })}
      </div>
      <div
        className={s.progress}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
