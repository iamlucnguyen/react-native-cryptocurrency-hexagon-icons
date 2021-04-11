import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMln = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="mln_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0b1529" />
        <Stop offset="100%" stopColor="#284c95" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#mln_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M160.897 287.364l57.992 34.012v19.019L143 295.735v-116.49L242 121l99 58.245v116.49l-75.889 44.66v-19.03l57.981-34.001-14.96-8.646 1.958-3.399 14.773 8.536v-86.372l-75.02 44.462v127.16L242 374l-7.854-4.895v-127.16l-75.009-44.462v86.361l14.762-8.525 1.958 3.41-14.96 8.635zm78.925-146.41l-72.842 42.735L242 228.162l75.02-44.473-73.271-42.988v17.644h-3.927v-17.391zm0 28.512h3.927v18.227h-3.927v-18.227zm0 29.348h3.927v18.227l-1.969.891-1.958-.88v-18.238zm61.16 70.95l-1.958 3.41-15.796-9.13 1.969-3.399 15.785 9.13zm-24.915-14.674l-1.969 3.41-15.785-9.13.22-2.134 1.738-1.254 15.796 9.108zm-93.06 14.674l15.785-9.119 1.969 3.41-15.785 9.108-1.969-3.399zm24.926-14.674l15.785-9.108 1.76 1.254.198 2.145-15.785 9.108-1.958-3.399z"
    />
  </Svg>
);

export default SvgMln;
