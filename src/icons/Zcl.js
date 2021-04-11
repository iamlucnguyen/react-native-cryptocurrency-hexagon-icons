import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgZcl = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="zcl_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#c87035" />
        <Stop offset="100%" stopColor="#d99a70" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#zcl_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M241.912 363C175.087 362.956 121 308.77 121 241.846c0-66.781 54.252-120.89 121.165-120.846 66.715.044 120.923 54.274 120.835 121.022-.132 66.022-53.196 120.89-121.088 120.978zm-49.313-65.67c.341-.649.605-1.166.858-1.584 10.824-19.096 21.67-38.17 32.516-57.222a18868.098 18868.098 0 0028.435-50.138 1.606 1.606 0 011.65-.99c11.044.055 22.132.055 33.165.055h1.573c-15.334 27.06-30.558 53.933-45.903 80.96.55.044.858.044 1.155.044 27.709 0 55.396.011 83.072.044.935 0 1.232-.341 1.441-1.155a91.498 91.498 0 001.155-45.397c-4.136-18.15-13.211-33.473-26.598-46.288a84.227 84.227 0 00-20.24-14.267c-18.414-9.394-37.807-12.375-58.135-8.8-20.24 3.597-37.29 13.156-51.271 28.27-1.837 1.98-3.498 4.103-5.247 6.16.044.121.132.22.176.33h78.98c-.44.825-.737 1.419-1.078 1.98-4.807 8.536-9.68 17.028-14.443 25.575a2.178 2.178 0 01-2.222 1.276c-24.882-.044-49.764-.055-74.624-.044h-1.496c-12.606 39.633 5.203 89.342 49.874 109.23 43.252 19.316 88.605 1.54 109.868-28.127-40.865.077-81.752.11-122.65.077zm139.073 20.878c15.345-17.05 28.985-45.1 28.127-78.793-.682-27.753-10.186-52.14-27.951-73.7-5.544 5.588-10.956 11.011-16.324 16.434 28.16 33.869 29.37 83.952.297 119.911z"
      fill="#fff"
    />
  </Svg>
);

export default SvgZcl;
