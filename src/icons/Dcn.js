import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgDcn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="dcn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#136485" />
        <Stop offset="100%" stopColor="#23a9df" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#dcn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M180.796 407.066a176.088 176.088 0 01-61.644-39.028l1.617-2.827c26.268-41.503 49.863-84.458 67.628-130.35 18.843-48.675 33.924-98.637 48.29-148.797 1.287-4.477 2.816-8.877 4.224-13.31 1.518 1.738 2.068 3.355 2.53 4.994 9.02 32.186 17.743 64.46 27.104 96.536 17.05 58.443 41.03 113.883 72.787 165.847 3.707 6.05 10.01 16.192 18.92 30.382a175.868 175.868 0 01-66.385 39.094 47522.123 47522.123 0 00-55.022-166.87l-1.694-.022c-12.826 36.047-32.274 90.827-58.355 164.351zm62.029-340.527h-1.364L242 66l.825.539z"
    />
  </Svg>
);

export default SvgDcn;
