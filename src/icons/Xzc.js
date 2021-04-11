import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXzc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xzc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#23b852" />
        <Stop offset="100%" stopColor="#53de7f" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xzc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M271.975 276.628h37.29v32.604H197.23L336.303 170.06a16.148 16.148 0 003.52-17.314A15.994 15.994 0 00325.05 143h-166.1A15.84 15.84 0 00143 158.972v117.656l69.025-69.08h-37.29v-32.78h111.848L147.697 313.94a16.148 16.148 0 00-3.52 17.314c2.519 5.885 8.228 9.746 14.773 9.746h166.1A15.95 15.95 0 00341 325.028v-117.48l-69.025 69.08z"
    />
  </Svg>
);

export default SvgXzc;
