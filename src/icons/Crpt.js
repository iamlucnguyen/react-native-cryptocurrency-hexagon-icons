import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgCrpt = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="crpt_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00bdcd" />
        <Stop offset="100%" stopColor="#29eeff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#crpt_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M306.163 173.184a85.404 85.404 0 00-55.638-20.317c-46.145 0-84.15 36.487-87.318 83.127h-9.042c3.168-52.184 45.243-92.367 96.36-92.367 22.627 0 44.33 8.316 61.974 23.1zm-3.168 30.481a64.493 64.493 0 00-52.47-27.247c-35.739 0-64.691 29.557-64.691 65.582 0 36.476 28.952 66.044 64.68 66.044 20.746 0 40.249-10.12 52.481-27.258l6.347 6.468c-14.036 18.931-35.75 30.03-58.817 30.03-40.722 0-73.744-33.726-73.744-75.284 0-41.096 33.022-74.822 73.744-74.822a73.205 73.205 0 0158.817 30.03zm10.406-23.551l6.347-6.468c2.255 2.31 4.07 4.62 5.874 6.93l-6.336 6.457a80.927 80.927 0 00-5.885-6.93zm-63.327 160.71c-51.117 0-93.192-40.172-96.36-92.356h9.042c3.168 46.64 41.173 83.127 87.318 83.127 20.35 0 39.82-6.93 55.638-20.317l6.336 6.457a95.568 95.568 0 01-61.974 23.1zm63.327-36.476c2.266-2.31 4.07-4.62 5.885-6.93l6.336 6.457c-1.815 2.31-3.619 4.62-5.874 6.93zM141.053 242c0 61.424 49.302 111.76 109.472 111.76 32.571 0 63.327-14.311 84.15-40.634l6.325 6.457C318.384 347.303 285.813 363 250.525 363 184.932 363 132 308.495 132 242c0-66.968 53.383-121 118.525-121 34.815 0 67.87 15.697 90.475 43.417l-6.336 6.468c-20.812-25.861-51.568-40.645-84.15-40.645-60.17 0-109.461 50.336-109.461 111.76z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCrpt;
