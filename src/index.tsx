import React from 'react';
import ReactDOM from 'react-dom';

import { RangeSlider } from './RangeSlider';

import './index.css';

const SCALE = Array.from(new Array(5).keys());

ReactDOM.render(
  <React.StrictMode>
    <RangeSlider scale={SCALE} />
  </React.StrictMode>,
  document.getElementById('root')
);
