import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgRap = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="rap_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#4c4c4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#rap_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M203.258 136.785v214.258H165V132h38.258v4.785zM230.527 132h21.516c44.484 0 74.14 28.215 74.14 68.387 0 32.527-17.71 57.398-49.753 65.527l55.957 85.129H287.43L210.914 232.43h36.828c24.387 0 39.688-11 39.688-32.516 0-21.527-15.29-32.527-39.688-32.527H231V132h-.473z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgRap;
