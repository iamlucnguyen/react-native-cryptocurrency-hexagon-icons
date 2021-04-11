import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBlk = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="blk_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#181818" />
        <Stop offset="100%" stopColor="#5d5d5d" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#blk_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M320.1 188.43a41.833 41.833 0 01-26.796 41.052s11.132-11 10.615-39.193c-.528-28.193-21.23-42.13-21.23-42.13s36.894 8.217 37.4 40.26zM197.296 339.009l-37.796 1.859v-3.531s23.133-2.387 23.133-43.89v-106.04c0-35.134-23.133-41.217-23.133-41.217V143l37.796 1.848zm60.412 1.98c-16.445.143-46.948-2.156-46.948-2.156v-193.71c20.108-.275 27.137-3.047 43.703-.66 16.577 2.376 30.811 18.931 34.694 35.486 3.883 16.555-.253 32.318-5.566 40.92s-16.951 14.575-16.951 14.575 17.6 6.094 23.815 11.385c6.215 5.302 18.26 19.734 13.596 51.128-4.664 31.394-29.909 42.9-46.343 43.032zm43.681-7.15s17.93-15.62 17.138-47.311-17.138-46.585-17.138-46.585 33.726 8.47 34.1 46.222c.396 37.741-34.1 47.685-34.1 47.685zm-34.1-113.674c12.078-16.071 8.283-46.31-6.347-56.65-14.63-10.34-30.03-5.17-33-2.255-2.992 2.915-2.86 70.73-2.86 70.73s30.118 4.246 42.196-11.825zm2.233 28.875c-11.308-5.038-44.44-3.718-44.44-3.718s-.517 17.127.693 49.181 11.913 31.878 23.045 32.318c11.132.44 32.362-.352 39.347-27.995 6.996-27.632-7.337-44.759-18.645-49.786z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBlk;