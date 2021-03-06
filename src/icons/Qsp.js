import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgQsp = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="qsp_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#454545" />
        <Stop offset="100%" stopColor="#7c7c7c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#qsp_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M192.5 242c0-27.291 22.209-49.5 49.5-49.5s49.5 22.209 49.5 49.5c0 7.183-1.573 13.992-4.334 20.163l-32.67-32.67-24.992 25.003 32.67 32.67A49.148 49.148 0 01242 291.5a49.555 49.555 0 01-49.5-49.5m129.943 0a80.003 80.003 0 00-12.98-43.758L341 166.694 317.306 143l-31.548 31.548c-12.606-8.195-27.61-12.991-43.758-12.991s-31.152 4.796-43.758 12.98L166.694 143 143 166.694l31.548 31.548c-8.195 12.606-12.991 27.61-12.991 43.758s4.807 31.152 12.991 43.758L143 317.306 166.694 341l31.548-31.548c12.606 8.195 27.61 12.991 43.758 12.991s31.152-4.796 43.758-12.991L317.306 341 341 317.306l-31.548-31.548A79.992 79.992 0 00322.443 242"
      fill="#fff"
    />
  </Svg>
);

export default SvgQsp;
