import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgSngls = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="sngls_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#b30d23" />
        <Stop offset="100%" stopColor="#ef2f48" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#sngls_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M252.043 299.574l-10.252 19.096-10.252-19.096C169.609 294.767 121 248.589 121 248.589c0-.11 47.234-44.858 107.899-50.754l8.03-13.75 4.862-8.085 8.25 13.75 4.642 8.085c60.654 5.786 107.899 50.754 107.899 50.754s-48.62 46.178-110.55 50.985zm-120.791-50.985c-.11 0 46.706 31.988 93.731 38.753l-22.924-42.9 6.226-10.802 5.72 10.692-.11.11 22.297 43.89c1.793.11 3.586.11 5.39.11 1.793 0 3.487 0 5.28-.11l16.379-32.648 11.946-22.264 6.226 10.802-22.924 43.01c47.025-6.655 93.83-37.873 93.83-38.753 0-.77-44.583-30.558-90.453-38.203l6.974 12.122-5.808 11.671-15.114-25.322a114.95 114.95 0 00-6.127-.22c-2.013 0-4.125.11-6.237.22l-15.433 25.322-5.698-11.132 7.282-12.551c-45.859 7.755-90.453 38.203-90.453 38.203z"
    />
  </Svg>
);

export default SvgSngls;