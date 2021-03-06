import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgSys = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="sys_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0082c6" />
        <Stop offset="100%" stopColor="#24b3ff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#sys_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M264.506 232.133a1.287 1.287 0 00-1.254.451 1.188 1.188 0 00.253 1.716c48.169 34.958-20.394 114.994-153.505 29.821 112.86 106.205 270.017-11.11 154.506-31.988zm-64.284-46.728c-99.946 31.977 14.553 107.393 24.486 69.3a1.21 1.21 0 00-.913-1.507 1.32 1.32 0 00-.704.011c-14.707 4.785-95.711-17.864-22.88-67.804zM374 204.622c-86.537-61.71-248.908-10.824-165.143 32.747a1.309 1.309 0 001.727-.517 1.21 1.21 0 00.033-1.078C176.55 163.79 349.591 185.68 374 204.622zm-71.808 89.661c45.749-20.79 8.547-91.971-51.964-78.232a1.276 1.276 0 01-1.518-.935 1.177 1.177 0 01.44-1.21c47.08-35.376 135.454 47.212 53.042 80.377z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSys;
