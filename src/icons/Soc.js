import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgSoc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="soc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#199248" />
        <Stop offset="100%" stopColor="#34dc75" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#soc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M242 110c-72.897 0-132 59.103-132 132s59.103 132 132 132 132-59.103 132-132a132 132 0 00-132-132zm30.173 244.596a116.556 116.556 0 11-50.545-227.359 116.567 116.567 0 0150.545 227.359z" />
      <Path d="M274.23 146.157c0 5.687 0 11.363.22 17.05a107.25 107.25 0 00-23.606-6.182c-.33-5.159 1.144-10.824-.363-15.719a146.443 146.443 0 00-17.292-.209c-.286 5.302-.176 10.626 0 15.95a108.504 108.504 0 00-23.606 6.314c.165-5.742.22-11.473.143-17.226a101.2 101.2 0 000 191.818c0-5.632-.055-11.242-.165-16.852a100.243 100.243 0 0023.463 6.039c0 5.159 0 10.318-.308 15.422 6.16.88 12.408.88 18.568 0a289.993 289.993 0 01-.44-15.257 111.342 111.342 0 0023.54-5.984 266.057 266.057 0 000 16.72 101.2 101.2 0 00-.121-191.807l-.022-.077zm15.07 153.285c-13.288 12.045-32.164 14.894-49.5 14.641-15.213 0-31.317-4.125-42.306-15.136-5.83-5.632-9.13-13.156-12.089-20.625 10.626-2.75 21.593-3.674 32.296-5.962a18.766 18.766 0 0012.518 14.047c9.713 3.036 21.747 3.465 29.843-3.465 5.742-4.763 5.907-15.18-1.21-18.744-16.687-8.624-37.477-5.698-53.251-16.61-21.725-13.695-23.331-50.017-2.068-64.801 16.258-11.407 37.994-12.826 56.848-8.25 17.05 4.312 29.205 18.766 35.057 34.771-10.494 1.815-20.977 3.674-31.471 5.445-2.761-16.665-26.092-20.625-37.686-10.912-6.6 5.489-4.906 17.182 3.344 20.108 18.04 7.48 39.71 5.324 55.693 17.842 18.557 12.584 20.493 42.636 3.971 57.64z" />
    </G>
  </Svg>
);

export default SvgSoc;
