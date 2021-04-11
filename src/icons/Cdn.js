import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgCdn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="cdn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f70808" />
        <Stop offset="100%" stopColor="#f95252" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#cdn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M242 132l-18.26 33.176c-2.068 3.608-5.775 3.278-9.493 1.265l-13.2-6.677 9.834 50.963c2.079 9.317-4.565 9.317-7.843 5.28L179.96 190.85l-3.74 12.782c-.44 1.683-2.332 3.443-5.181 3.025l-29.15-5.984 7.645 27.148c1.65 6.039 2.926 8.536-1.65 10.12l-10.395 4.774 50.193 39.732a6.325 6.325 0 012.288 6.655l-4.4 14.058c17.292-1.947 32.78-4.862 50.072-6.666 1.529-.154 4.081 2.299 4.07 4.026L237.435 352h8.404l-1.32-51.37c-.011-1.727 2.31-4.29 3.828-4.136 17.292 1.804 32.78 4.73 50.061 6.666l-4.389-14.058a6.314 6.314 0 012.288-6.655l50.193-39.732-10.395-4.763c-4.576-1.595-3.3-4.092-1.65-10.131l7.656-27.148-29.161 5.984c-2.849.418-4.752-1.342-5.17-3.025l-3.751-12.782-23.067 25.168c-3.278 4.026-9.922 4.026-7.843-5.28l9.845-50.974-13.211 6.677c-3.718 2.013-7.425 2.343-9.493-1.265z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCdn;