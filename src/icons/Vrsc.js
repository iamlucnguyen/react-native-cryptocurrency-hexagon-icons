import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgVrsc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="vrsc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ffb500" />
        <Stop offset="100%" stopColor="#fecb4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#vrsc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M372.878 225.797a132.033 132.033 0 00-30.58-69.432 130.46 130.46 0 00-42.504-32.89 131.604 131.604 0 00-70.51-12.727 131.824 131.824 0 00-105.864 73.568 132.143 132.143 0 00-11.704 78.133 131.516 131.516 0 0032.67 68.2c24.695 27.522 61.501 43.615 98.472 43.186a131.857 131.857 0 00130.02-148.038zm-40.194-28.49a16.643 16.643 0 00-1.562 2.673l-58.058 122.298c-2.783 5.841-5.577 11.748-8.745 17.38-14.377-.11-28.754-.055-43.142-.055-22.913-47.168-45.716-94.38-68.684-141.493-.473-.913-.957-1.881-1.441-2.794.374-.264 1.232-.748 1.606-.968 8.965-11.154 18.04-22.264 27.049-33.429 1.122-1.441 2.42-2.838 3.696-4.125.594.957 1.177 1.925 1.661 3.003a4981.537 4981.537 0 0015.18 34.496c5.17 0 10.307.11 15.51-.22 1.881 1.782 2.904 4.147 3.652 6.556.968-2.464 1.342-5.093 1.452-7.777 1.661-15.4 1.936-30.965 3.597-46.365.264-3.322 5.258-3.322 5.687-.11 1.606 14.597 1.98 29.359 3.168 44 .22 4.4.374 8.8 1.342 13.09 2.2-2.893 1.496-7.986 5.522-9.174 3.333-1.122 7.084.759 10.252-1.232 4.345-2.629 5.951-7.777 8.69-11.803 1.562-2.629 5.148-4.51 8.052-3.003 2.893 1.122 4.125 4.235 5.632 6.71 1.716 2.838 3.278 6.006 6.061 7.887 2.475 1.067 5.258 1.232 7.942 1.177 5.423-12.232 11-24.42 16.533-36.597 9.658 12.133 18.777 24.64 28.435 36.762 1.452.638 1.716 1.716.913 3.113z" />
      <Path d="M264.803 181.951c-4.345 4.73-5.896 12.342-12.397 14.762-3.322 1.606-7.348.264-10.67 1.507-2.904 5.687-2.53 12.386-4.73 18.293-1.496 2.794-6.006 1.397-6.006-1.661-1.87-16.049-2.035-32.252-3.751-48.29-1.826 14.432-2.31 29.018-4.565 43.34 0 3.718-5.852 4.301-6.38.605-1.133-4.18-1.397-8.58-3.498-12.507a368.555 368.555 0 00-10.89 0c13.684 31.02 27.258 62.029 40.942 93.049 13.849-31.02 28.171-61.82 41.91-92.884l.055-.11c-3.597-.44-7.513-.803-10.516-3.058-4.18-3.487-5.797-9.075-9.504-13.046z" />
    </G>
  </Svg>
);

export default SvgVrsc;
