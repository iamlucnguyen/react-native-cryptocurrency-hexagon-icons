import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGnt = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="gnt_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#001d57" />
        <Stop offset="100%" stopColor="#0047d5" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gnt_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M291.489 124.168l13.233 13.244-25.047 25.74c5.28 8.03 8.118 17.501 8.118 27.269a48.928 48.928 0 01-13.838 34.441 46.013 46.013 0 01-24.387 13.486v22.429a47.003 47.003 0 0124.343 13.42 48.961 48.961 0 0113.882 34.496 48.961 48.961 0 01-13.882 34.485 46.882 46.882 0 01-33.77 14.322 46.64 46.64 0 01-33.77-14.322 49.214 49.214 0 01-13.871-34.485c0-12.98 4.928-25.289 13.838-34.452a46.013 46.013 0 0124.387-13.475v-22.44a47.014 47.014 0 01-24.343-13.42A49.214 49.214 0 01192.5 190.41c0-12.98 4.928-25.289 13.882-34.485a46.882 46.882 0 0133.77-14.333c9.46 0 18.557 2.882 26.345 8.239l25.003-25.663zm-51.337 154.627a27.83 27.83 0 00-20.427 8.69 30.261 30.261 0 00-8.525 21.208c0 7.975 3.025 15.422 8.525 21.197a28.38 28.38 0 0020.427 8.69 27.83 27.83 0 0020.416-8.69 30.261 30.261 0 008.525-21.197c0-7.975-3.025-15.422-8.558-21.241a27.797 27.797 0 00-20.383-8.657zm20.383-66.99a30.294 30.294 0 008.558-21.241 29.7 29.7 0 00-8.525-21.208 28.358 28.358 0 00-20.416-8.69 27.83 27.83 0 00-20.427 8.69 30.261 30.261 0 00-8.525 21.208c0 7.975 3.025 15.422 8.525 21.197a28.38 28.38 0 0020.427 8.69c7.821 0 15.037-3.036 20.383-8.646z"
    />
  </Svg>
);

export default SvgGnt;
