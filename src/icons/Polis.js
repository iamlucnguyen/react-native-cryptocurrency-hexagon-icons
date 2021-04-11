import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgPolis = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="polis_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2c3e50" />
        <Stop offset="100%" stopColor="#55779a" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#polis_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M347.996 315.48v-11c0-2.178-1.463-3.63-3.685-3.63h-7.315v-11.044c0-2.189-1.463-3.674-3.641-3.674h-7.326v-80.795h7.282c2.189 0 3.685-1.452 3.685-3.674v-11h7.315a3.542 3.542 0 003.641-2.948c.374-1.826-.363-3.278-1.815-4.048l-102.498-51.392a5.06 5.06 0 00-3.278 0l-106.172 51.392a3.663 3.663 0 00-1.826 4.004c0 1.87 1.463 2.992 3.278 2.992h11v11c0 2.178 1.463 3.63 3.641 3.63h7.326v80.839h-7.282c-2.2 0-3.685 1.452-3.685 3.63v11.044h-7.315c-2.2 0-3.652 1.452-3.652 3.641v11.033c-2.178 0-3.674 1.463-3.674 3.685s1.452 3.674 3.641 3.674h212.355c2.178 0 3.674-1.452 3.674-3.63 0-2.2-1.452-3.729-3.63-3.729h-.044zM153.923 197.978v-7.315h175.714v7.315H153.923zm150.073 7.37v80.784h-14.608v-80.795h14.608zm-36.608 0v80.784h-14.641v-80.795h14.63zm-36.608 0v80.784h-14.608v-80.795h14.608zm-36.608 0v80.784h-14.597v-80.795h14.597zm135.465 95.458h-175.67v-7.359H329.67v7.359h-.033z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgPolis;
