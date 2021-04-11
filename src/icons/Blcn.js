import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBlcn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="blcn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2aabe4" />
        <Stop offset="100%" stopColor="#69c4ec" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#blcn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M152.9 143h68.2a9.9 9.9 0 019.9 9.9v68.2a9.9 9.9 0 01-9.9 9.9h-68.2a9.9 9.9 0 01-9.9-9.9v-68.2a9.9 9.9 0 019.9-9.9zm110 0h68.2a9.9 9.9 0 019.9 9.9v68.2a9.9 9.9 0 01-9.9 9.9h-68.2a9.9 9.9 0 01-9.9-9.9v-68.2a9.9 9.9 0 019.9-9.9zm0 110h68.2a9.9 9.9 0 019.9 9.9v68.2a9.9 9.9 0 01-9.9 9.9h-68.2a9.9 9.9 0 01-9.9-9.9v-68.2a9.9 9.9 0 019.9-9.9zm-110 0h68.2a9.9 9.9 0 019.9 9.9v68.2a9.9 9.9 0 01-9.9 9.9h-68.2a9.9 9.9 0 01-9.9-9.9v-68.2a9.9 9.9 0 019.9-9.9z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBlcn;
