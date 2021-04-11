import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgChips = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="chips_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#598182" />
        <Stop offset="100%" stopColor="#86abac" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#chips_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M215.028 345.488a3253737.894 3253737.894 0 0027.896-36.047c10.439 1.628 20.724.704 30.558-3.564 3.553-1.54 6.732-3.938 10.076-5.962.473-.286.913-.66 1.276-.935l33.792 33.418c-2.805 1.87-5.588 3.894-8.547 5.632a103.048 103.048 0 01-37.169 12.87 115.17 115.17 0 01-23.342.88 131.109 131.109 0 01-34.54-6.292zm-10.626-4.136a109.912 109.912 0 01-10.956-5.654 98.483 98.483 0 01-40.81-45.65 109.725 109.725 0 01-8.657-31.46 135.542 135.542 0 01-.682-25.388c1.353-21.725 7.964-41.69 21.285-59.257 12.298-16.214 28.446-27.313 47.553-34.43a106.271 106.271 0 0128.215-6.49c7.293-.627 14.663-1.254 21.956-.935 4.51.187 8.943.627 13.31 1.32a7513427.196 7513427.196 0 01-28.292 41.074 58.19 58.19 0 00-26.51 8.976c-14.63 9.284-23.386 22.66-27.5 39.16a79.651 79.651 0 00-2.376 21.274c.099 3.762.418 7.447.979 11.044l-3.388 4.917c-2.728 3.96.627 9.196 5.478 8.558l1.232-.154c2.838 8.019 7.139 15.51 13.09 22.385 3.696 4.246 7.821 7.81 12.364 10.67l-15.895 38.401a5.39 5.39 0 00-.396 1.65zm81.873-205.678a90.068 90.068 0 0127.456 12.551c1.518 1.034 2.904 2.255 4.356 3.388.275.209.561.396.913.638-.462.528-.726.88-1.045 1.188-10.021 9.878-20.064 19.723-30.052 29.634-1.1 1.1-1.793 1.276-3.124.33a47.08 47.08 0 00-13.211-6.556l14.113-37.125.374-.957a5.368 5.368 0 00.22-3.091zm-40.744 120.428l-52.283 6.831 86.988-126.313.484.22-33.605 88.341 61.325-9.68-97.889 126.61-.473-.33 35.453-85.679z"
      fill="#fff"
    />
  </Svg>
);

export default SvgChips;