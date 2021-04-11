import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgUtk = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="utk_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#30367a" />
        <Stop offset="100%" stopColor="#545cbb" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#utk_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M223.883 311.278v-145.97H181.5V132h121v33.308h-42.383v145.97zM214.126 352c-21.879 0-32.23-10.516-32.23-32.758V174.856h31.834v142.912c0 3.52 1.155 4.686 4.609 4.686h47.729c3.454 0 4.62-1.177 4.62-4.686V174.856H302.5v144.386c0 22.242-10.362 32.758-32.23 32.758z"
      fill="#fff"
    />
  </Svg>
);

export default SvgUtk;
