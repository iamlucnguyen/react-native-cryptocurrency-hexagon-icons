import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgPayx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="payx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#630" />
        <Stop offset="100%" stopColor="#e07000" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#payx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M194.568 176.693L208.318 143l94.182.341c13.75 1.034 30.25 1.034 39.534 12.727 11 12.716 8.591 30.932 3.091 45.364A95.832 95.832 0 01275.341 264c-22.682 3.443-45.716 2.409-68.75 2.409a10162.95 10162.95 0 0013.75-33.693c18.909 0 38.159 1.034 57.409-2.057 17.534-4.466 33.693-22 30.943-41.25-1.727-8.25-11-12.034-18.92-12.034-31.614-1.375-63.25 0-94.864-.693h-.341z" />
      <Path d="M154 185.966h111.716l-14.773 38.159H138.864L154 186.307v-.33zm17.875 46.75h38.841L170.17 335.841H132l40.216-103.125h-.341z" />
    </G>
  </Svg>
);

export default SvgPayx;
