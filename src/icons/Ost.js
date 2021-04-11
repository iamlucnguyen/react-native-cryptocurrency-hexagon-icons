import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgOst = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ost_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#34445b" />
        <Stop offset="100%" stopColor="#5c78a1" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ost_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M241.307 178.442l22.11-34.496a22.33 22.33 0 009.13-43.67 22.33 22.33 0 00-22.44 35.2l-27.434 42.801a87.56 87.56 0 00-78.562 95.777 87.615 87.615 0 0095.766 78.562 87.615 87.615 0 0078.573-95.766 87.637 87.637 0 00-77.143-78.408zm-10.065 133.342a46.42 46.42 0 01-46.464-46.453 46.42 46.42 0 0146.464-46.464 46.42 46.42 0 0143.45 30.052 26.862 26.862 0 00-37.664-4.763 26.851 26.851 0 00-4.763 37.664 26.851 26.851 0 0042.339.077 46.354 46.354 0 01-43.362 29.887z" />
      <Path d="M241.307 178.442l22.11-34.496a22.33 22.33 0 009.13-43.67 22.33 22.33 0 00-22.44 35.2l-27.434 42.801a87.56 87.56 0 00-78.562 95.777 87.615 87.615 0 0095.766 78.562 87.615 87.615 0 0078.573-95.766 87.637 87.637 0 00-77.143-78.408zm-10.065 133.342a46.42 46.42 0 01-46.464-46.453 46.42 46.42 0 0146.464-46.464 46.42 46.42 0 0143.45 30.052 26.862 26.862 0 00-37.664-4.763 26.851 26.851 0 00-4.763 37.664 26.851 26.851 0 0042.339.077 46.354 46.354 0 01-43.362 29.887z" />
    </G>
  </Svg>
);

export default SvgOst;
