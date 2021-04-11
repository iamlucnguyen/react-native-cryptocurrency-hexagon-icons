import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgWicc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="wicc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#5783cb" />
        <Stop offset="100%" stopColor="#89a8da" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#wicc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M233.64 110h13.64a127.424 127.424 0 0180.08 33.44c3.74 2.42 3.74 8.36-.66 9.9-3.74.88-6.6-2.42-9.46-4.4a118.14 118.14 0 00-162.8 18.92 115.5 115.5 0 00127.6 181.94 118.8 118.8 0 0077.44-88 145.405 145.405 0 003.74-24.42 4.642 4.642 0 019.24.88l-.44 13.64a128.26 128.26 0 01-37.84 84.26 131.12 131.12 0 01-85.8 37.84H235.4A132.22 132.22 0 01110 248.16v-12.32A132.66 132.66 0 01233.64 110z" />
      <Path d="M341 178.42c8.8-9.68 27.06-4.4 29.04 8.58 2.86 11.66-8.36 21.56-19.8 20.68-15.18 15.4-27.28 33.66-37.62 52.8-4.18 5.72 1.1 13.2-2.2 19.14-3.96 11.66-21.12 14.08-28.6 4.4-5.5-6.16-3.96-14.74-1.1-21.56a88.924 88.924 0 00-16.5-23.54l-6.6.22a212.08 212.08 0 00-35.42 53.46c1.54 5.94 2.64 12.98-1.54 18.26-5.5 9.02-20.02 9.9-26.84 1.54-5.06-5.72-4.4-13.86-1.76-20.68a206.8 206.8 0 00-32.12-57.2c-8.58-.44-17.6-5.5-18.7-14.52-2.86-12.32 11.22-24.2 22.88-18.7 10.34 3.74 13.2 16.94 8.14 25.96a210.54 210.54 0 0034.54 58.08A186.494 186.494 0 00244.86 231c-1.76-5.94-2.86-12.76 1.1-18.26 5.94-9.68 21.78-9.9 27.94-.22 4.62 5.94 3.08 13.86.44 20.24a92.4 92.4 0 0016.06 23.76l6.6-.44c16.06-16.94 30.8-35.64 40.7-56.98-1.1-7.04-2.42-15.4 3.52-20.68H341z" />
    </G>
  </Svg>
);

export default SvgWicc;
