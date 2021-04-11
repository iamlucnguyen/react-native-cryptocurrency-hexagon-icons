import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgNuls = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="nuls_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#82bd39" />
        <Stop offset="100%" stopColor="#a7d471" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#nuls_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M224.433 278.96L242 302.104V352l-66-29.293V193.809c0-1.903.847-3.718 2.332-4.983l7.513-6.435a6.996 6.996 0 0110.153 1.067l60.115 78.804 33.209 20.306v-108.68l-29.348-14.641-1.43 68.156-15.532-20.603-.704-74.8L308 162.569v128.304l-14.927 12.298-47.014-26.257-52.184-68.453-.715 103.994 31.075 15.917z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNuls;
