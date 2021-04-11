import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgNeu = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="neu_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#b3ba00" />
        <Stop offset="100%" stopColor="#f6fe1c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#neu_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M210.43 183.304l-1.43.869L275 286V184.085L242.044 165zM209 298.815L243.496 319 275 300.608 209 198zm-33-96.899v80.168L198 297V187zM286 297l22-15.257v-79.486L286 187z" />
      <Path d="M242 110c-72.875 0-132 59.125-132 132s59.125 132 132 132 132-59.125 132-132-59.125-132-132-132zm-.55 215.82l-71.236-42.24v-84.348l71.247-42.13 71.236 42.13v84.359l-71.236 42.218z" />
    </G>
  </Svg>
);

export default SvgNeu;
