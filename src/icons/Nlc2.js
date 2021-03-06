import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgNlc2 = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="nlc2_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f28f01" />
        <Stop offset="100%" stopColor="#feb244" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#nlc2_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M265.661 216.909l-21.351-41.976c4.444-9.68 6.666-15.18 6.666-16.445 0-4.543-2.992-7.865-8.965-9.988h65.428c-8.063 3.63-15.235 12.705-21.505 27.236zm-32.076 65.208l-9.955 20.24h58.707c26.587 0 44.363-4.983 53.328-14.96L304.293 335.5H143.858c17.325-3.333 34.804-24.2 52.426-62.634a9048.333 9048.333 0 0016.357-32.714zM121 288.75c12.991-7.711 60.5-89.892 60.5-113.014 0-5.445-3.289-10.593-9.856-15.433h51.084l44.363 87.142 43.032-87.142H363c-22.407 5.896-66.77 111.606-66.77 123.904 0 2.42.44 3.938 1.342 4.543h-46.607l-39.886-79.882-39.435 79.882z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNlc2;
