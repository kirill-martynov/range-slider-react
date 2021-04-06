import React from "react";

import { Line } from "./components/Line";

import s from "./RangeSlider.module.css";

interface IProps {
  scale: number[];
}

export const RangeSlider: React.FC<IProps> = ({ scale }) => {
  return (
    <div className={s.container}>
      <Line scale={scale} />
    </div>
  );
};
