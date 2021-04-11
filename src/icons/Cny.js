import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgCny = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="cny_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ff4314" />
        <Stop offset="100%" stopColor="#ff7b5a" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#cny_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M166.881 154h151.976v21.175H166.87zm-16.94 62.051h187.803v21.395h-57.53v71.577c0 5.5 2.387 8.25 7.37 8.25h23.892c2.607 0 4.774-1.683 6.072-4.862 1.529-3.388 2.607-13.772 3.047-30.921L341 287.848c-1.518 23.925-4.345 38.115-8.25 42.57-3.905 4.224-9.548 6.556-17.16 6.556h-34.507c-15.422 0-23.012-7.832-23.012-23.298v-76.23h-32.142v4.235c-1.078 26.895-7.15 48.488-18.227 64.592-10.857 14.817-28.226 26.466-52.547 34.727L143 322.366c23.452-8.052 39.083-18.216 47.333-30.074 8.25-13.134 12.584-29.865 13.453-50.611v-4.235h-53.834z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCny;
