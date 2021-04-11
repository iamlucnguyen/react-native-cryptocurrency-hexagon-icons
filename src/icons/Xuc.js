import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXuc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xuc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#25aae3" />
        <Stop offset="100%" stopColor="#66c3eb" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xuc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M363 242c0 66.825-54.175 121-121 121s-121-54.175-121-121c0-66.836 54.175-121 121-121s121 54.175 121 121zm-41.47 3.806c.077-1.375 0 0 0-1.397 0-39.677-29.315-74.921-67.342-80.85v-23.1l-24.64 7.678v15.433c-38.005 5.918-67.122 38.72-67.122 78.375 0 40.59 30.47 74.03 69.784 78.815v22.748l24.64-7.678v-15.906a79.53 79.53 0 0059.851-51.48H291.17a55.88 55.88 0 01-49.28 29.535 56.034 56.034 0 01-55.847-51.986l135.498-.187zM189.75 221.43a56.023 56.023 0 0152.14-35.519 56.045 56.045 0 0152.107 35.53H189.761z"
    />
  </Svg>
);

export default SvgXuc;
