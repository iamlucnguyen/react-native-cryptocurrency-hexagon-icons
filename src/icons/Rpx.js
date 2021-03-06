import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgRpx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="rpx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#8d181b" />
        <Stop offset="100%" stopColor="#db3035" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#rpx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M348.656 239.052c7.92 0 14.344 6.27 14.344 14.025s-6.424 14.025-14.344 14.025c-6.05 0-11.231-3.674-13.332-8.855h-40.92l-15.092 26.84c-2.486 4.422-9.295 3.113-9.889-1.892l-3.388-28.677-12.54 92.994c-.836 6.182-10.087 5.896-10.516-.33l-10.285-150.337-10.89 99.594c-.66 5.94-9.383 6.248-10.45.363l-11.528-63.316-5.324 20.845a5.269 5.269 0 01-5.126 3.916H137.28c-2.915 0-5.28-2.31-5.28-5.17s2.365-5.17 5.28-5.17h47.96l10.329-40.381c1.386-5.412 9.328-5.137 10.34.352l9.339 51.359 13.409-122.617c.693-6.281 10.098-6.105 10.527.198l10.791 157.74 11.154-82.764c.814-6.039 9.779-5.973 10.494.077l6.402 54.065 8.624-15.356a5.302 5.302 0 014.631-2.673h44.044a14.344 14.344 0 0113.332-8.855z"
      fill="#fff"
    />
  </Svg>
);

export default SvgRpx;
