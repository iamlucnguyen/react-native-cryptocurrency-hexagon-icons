import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXtz = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xtz_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#a6e000" />
        <Stop offset="100%" stopColor="#cbff36" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xtz_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M266.09 352c-16.06 0-27.764-3.784-35.112-11.33-7.337-7.568-11.011-15.719-11.011-24.453 0-3.19.638-5.885 1.925-8.063a13.97 13.97 0 015.247-5.17c2.222-1.254 4.95-1.892 8.195-1.892s5.984.638 8.206 1.892a14.007 14.007 0 015.247 5.17c1.287 2.178 1.925 4.873 1.925 8.063 0 3.861-.935 7.007-2.816 9.449a13.024 13.024 0 01-6.666 4.785c2.222 3.025 5.72 5.17 10.505 6.424 4.785 1.353 9.57 2.024 14.344 2.024a32.23 32.23 0 0018.073-5.291c5.379-3.531 9.35-8.745 11.902-15.62 2.563-6.897 3.85-14.707 3.85-23.441 0-9.493-1.408-17.6-4.224-24.321-2.739-6.809-6.798-11.847-12.177-15.125a32.89 32.89 0 00-17.424-4.906c-4.092 0-9.218 1.672-15.367 5.038l-11.275 5.544v-5.544l50.732-66.528h-70.202v69.047c0 5.72 1.276 10.417 3.85 14.113 2.552 3.696 6.49 5.544 11.77 5.544 4.103 0 8.03-1.342 11.792-4.037a41.36 41.36 0 009.735-9.823 3.762 3.762 0 011.287-1.65 2.596 2.596 0 011.661-.616c.946 0 2.046.462 3.333 1.375a6.809 6.809 0 011.793 4.664 32.12 32.12 0 01-.638 3.531c-2.904 6.38-6.93 11.253-12.045 14.619a30.228 30.228 0 01-16.907 5.038c-15.202 0-25.707-2.937-31.515-8.822-5.808-5.874-8.712-13.86-8.712-23.936v-69.047H159.5v-12.859h35.86V146.63l-8.184-8.074V132h23.826l8.965 4.532v39.314l92.741-.253 9.24 9.075-56.892 55.946a38.61 38.61 0 0110.758-2.53c6.16 0 13.068 1.936 20.757 5.808 7.777 3.773 13.75 8.987 17.93 15.62 4.191 6.556 6.886 12.859 8.074 18.909a78.76 78.76 0 011.925 16.126 66.22 66.22 0 01-6.919 29.986 44.407 44.407 0 01-21.01 20.658A69.201 69.201 0 01266.09 352z"
    />
  </Svg>
);

export default SvgXtz;
