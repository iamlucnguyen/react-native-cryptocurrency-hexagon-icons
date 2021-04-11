import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgVen = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ven_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#15bdff" />
        <Stop offset="100%" stopColor="#5bd0fe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ven_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M228.118 338.074L143.44 165.506a4.18 4.18 0 013.74-6.006h29.348c1.573 0 3.047.88 3.74 2.266l61.842 125.191c5.5 11.22 21.461 11.22 26.972 0l61.644-125.092a4.202 4.202 0 013.74-2.266h3.652c2.167 0 3.542 2.266 2.563 4.136l-85.58 174.35c-5.511 11.22-21.461 11.22-26.983 0z"
    />
  </Svg>
);

export default SvgVen;
