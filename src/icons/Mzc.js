import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMzc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="mzc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ffaa05" />
        <Stop offset="100%" stopColor="#fec350" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#mzc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M250.921 193.237v20.493h24.354l-11 12.628h-16.357v15.873h17.017l-8.338 12.628h-8.679v32.384l-14.003 19.096v-51.48h-19.36l10.681-12.628h8.679v-15.873h-27.357l11-12.628h16.357V192.5c-8.063-8.723-19.184-13.09-33.363-13.09-27.192 0-48.708 28.985-48.708 57.805 0 19.206 4.4 35.508 13.178 48.895l-15.18 17.644C137.951 286.132 132 266.002 132 243.364 132 193.655 174.79 165 205.051 165c18.524 0 32.714 7.766 42.57 23.287 18.854-12.936 38.137-19.404 57.849-19.404 30.184 0 46.53 36.85 46.53 72.05 0 46.838-31.526 64.922-43.032 67.034a2.277 2.277 0 01-2.255-.902 2.134 2.134 0 01.561-3.036c17.809-11.968 26.708-30.305 26.708-55 0-53.911-27.687-66.385-48.037-66.385a62.623 62.623 0 00-35.024 10.593z"
    />
  </Svg>
);

export default SvgMzc;
