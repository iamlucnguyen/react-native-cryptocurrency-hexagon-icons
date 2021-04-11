import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgCob = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="cob_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#13bf99" />
        <Stop offset="100%" stopColor="#40ecc6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#cob_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M242 341h-49.896l24.992-43.527h49.808L291.896 341H242zm-24.893-154.484h-.011L192.104 143h99.792l-24.992 43.516h-49.808zm109.989 104.929h-.022.022l-25.003 43.538-24.904-43.527h.011l24.893-43.538H352l-24.904 43.527zm-170.192-98.989l24.992-43.527 24.904 43.527-24.904 43.516H132zm49.885 99h.011l-24.904 43.527-24.992-43.527L132 247.907h49.896l24.904 43.527zm120.307-99L352 235.983h-49.896l-24.915-43.527 24.904-43.527 25.003 43.527z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCob;
