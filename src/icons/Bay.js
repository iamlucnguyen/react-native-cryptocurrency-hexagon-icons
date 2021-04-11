import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBay = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="bay_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#6356ab" />
        <Stop offset="100%" stopColor="#9188c4" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#bay_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M316.624 241.714c.638-.715 1.353-1.43 2.068-2.156 2.31-2.486 4.84-5.137 7.227-7.7a53.625 53.625 0 0014.927-37.059c0-.957.154-4.895.154-5.456C339.889 157.751 313.291 132 281.853 132h-99v39.941H143V352h140.437C314.644 352 341 324.247 341 291.368c.077-23.507-14.454-40.106-24.376-49.654zm-113.927-49.72l78.837.077-49.533 50.215 48.983 49.72h-78.287zm80.74 139.876H162.844V191.917h20.02v120.065h98.12c8.096 0 15.323-4.895 18.414-12.43a20.152 20.152 0 00-4.29-21.901l-35.002-35.453 35.563-36.014c5.72-5.775 7.381-14.355 4.29-21.89a19.888 19.888 0 00-18.425-12.43h-78.76v-19.888h79.156c20.966 0 38.588 17.083 39.303 37.851 0 .88-.165 4.334-.165 4.411v.396a33.594 33.594 0 01-9.438 23.342c-2.464 2.574-5.005 5.291-7.304 7.7-3.894 4.092-7.227 7.623-8.822 9.229l-7.15 7.051 7.073 7.15c.957.957 2.145 2.079 3.575 3.443 8.25 7.7 22.154 20.526 22.154 38.654.077 21.659-17.545 40.667-37.719 40.667z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBay;
