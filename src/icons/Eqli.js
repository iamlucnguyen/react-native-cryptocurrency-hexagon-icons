import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgEqli = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="eqli_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#c9a35e" />
        <Stop offset="100%" stopColor="#d9be8e" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#eqli_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M176.297 279.18a4.092 4.092 0 01-3.674 2.31H127.82a4.048 4.048 0 01-3.465-2.002 4.07 4.07 0 01-.11-4.092l81.444-146.806c1.463-2.629 5.665-2.629 7.128 0l63.492 114.158a4.356 4.356 0 01-.11 4.092 3.806 3.806 0 01-3.465 1.991h-18.568a4.191 4.191 0 01-3.564-2.09l-41.25-75.02-46.156 85.305h17.622a4.18 4.18 0 013.465 1.881 4.158 4.158 0 01.209 3.993l-8.184 16.258zm183.414-3.784a3.85 3.85 0 01-.11 4.092 3.806 3.806 0 01-3.454 1.991H233.904a4.092 4.092 0 01-4.092-4.092V261.14c0-2.31 1.881-4.092 4.092-4.092h86.988l-46.068-85.008-8.712 17.413c-1.463 2.728-5.973 2.728-7.337 0l-8.184-16.258a4.477 4.477 0 010-3.674l20.35-40.81a4.29 4.29 0 013.564-2.211 4.29 4.29 0 013.674 2.09l81.532 146.806zm-52.987 16.258l20.24 36.729a4.07 4.07 0 010 4.092 3.806 3.806 0 01-3.454 1.991H160.457a4.191 4.191 0 01-3.575-2.09 4.07 4.07 0 01.11-4.103l32.626-52.987 32.527-56.98c.737-1.353 2.2-2.2 3.674-2.09a3.85 3.85 0 013.575 2.2l8.184 16.269a3.938 3.938 0 01-.11 3.883l-41.338 71.346h91.707l-8.503-14.168a3.85 3.85 0 01-.11-4.092 4.191 4.191 0 013.575-2.09h20.35c1.474 0 2.838.836 3.575 2.09z"
    />
  </Svg>
);

export default SvgEqli;
