import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXbc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xbc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f7931a" />
        <Stop offset="100%" stopColor="#f9b35e" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xbc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M351.747 283.294l-5.995 24.013-16.005-3.982 5.984-24.024-24.013-5.984 3.993-16.005 24.013 5.984 5.995-24.013 16.005 3.993-5.984 24.013 24.013 5.984-3.993 16.016zM292.71 217.36c-2.233 14.85-10.329 22.066-21.032 24.64 14.641 7.733 22.055 19.657 14.828 40.447-8.976 25.817-29.986 28.105-57.882 22.88l-6.93 27.742-16.346-4.07 6.831-27.39a607.805 607.805 0 01-13.024-3.377l-6.864 27.5-16.324-4.07 6.93-27.808c-3.828-.979-7.7-2.013-11.66-3.003l-21.285-5.313 8.228-19.162s12.045 3.201 11.88 2.97c4.642 1.133 6.71-1.958 7.535-4.015l10.934-43.868 1.738.429a13.244 13.244 0 00-1.705-.55l7.81-31.317c.22-3.553-.957-8.019-7.59-9.68.264-.165-11.869-2.948-11.869-2.948l4.455-17.864 22.55 5.632-.022.077c3.388.847 6.886 1.65 10.45 2.453l6.853-27.478 16.346 4.07-6.721 26.95c4.389.99 8.8 2.002 13.09 3.08l6.677-26.763 16.357 4.07-6.853 27.489c20.636 7.15 35.695 17.963 32.615 38.247zm-37.697 53.735c5.401-21.67-30.162-27.06-41.25-29.832L204.6 278.08c11.088 2.75 45.265 13.783 50.435-6.996zm5.357-53.856c4.906-19.723-24.838-23.947-34.067-26.246l-8.327 33.407c9.229 2.31 37.675 11.737 42.394-7.161z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXbc;
