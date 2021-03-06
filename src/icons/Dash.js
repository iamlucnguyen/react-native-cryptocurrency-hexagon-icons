import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgDash = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="dash_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#008ce7" />
        <Stop offset="100%" stopColor="#3bb2ff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#dash_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M275.946 154.044H195.91l-6.622 37.037 72.182.11c35.541 0 46.09 12.903 45.749 34.32-.154 10.978-4.939 29.546-6.963 35.53-5.467 16.06-16.731 34.342-58.949 34.287l-70.158-.044-6.622 37.081h79.827c28.149 0 40.139-3.289 52.8-9.13 28.094-12.958 44.825-40.711 51.546-76.934 9.966-53.9-2.464-92.257-72.765-92.257z" />
      <Path d="M239.877 239.778c2.607-10.835 3.432-15.18 3.432-15.18h-81.906c-20.944 0-23.936 13.64-25.927 21.89-2.607 10.791-3.432 15.191-3.432 15.191h81.917c20.933 0 23.925-13.64 25.916-21.901z" />
    </G>
  </Svg>
);

export default SvgDash;
