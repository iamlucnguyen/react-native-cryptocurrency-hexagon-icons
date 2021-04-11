import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgQiwi = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="qiwi_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ff8c00" />
        <Stop offset="100%" stopColor="#feae4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#qiwi_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M314.49 279.895c.561 4.411-.693 6.116-2.09 6.116s-3.355-1.705-5.445-5.115c-2.09-3.41-2.937-7.26-1.815-9.24.693-1.287 2.233-1.859 4.048-1.144 3.63 1.43 5.027 6.963 5.302 9.383zm-19.547 9.68c4.323 3.696 5.588 7.953 3.344 11.088a7.304 7.304 0 01-5.72 2.552 9.856 9.856 0 01-6.567-2.42c-3.905-3.41-5.027-9.097-2.519-12.221a5.379 5.379 0 014.477-1.991c2.233 0 4.752.99 6.985 2.981zM143 229.834C143 175.791 186.01 132 239.074 132c53.075 0 96.085 43.802 96.085 97.834a99.814 99.814 0 01-13.541 50.204c-.286.429-.99.286-1.122-.286-3.344-24.035-17.732-37.257-38.676-41.239-1.826-.286-2.101-1.43.275-1.705 6.424-.572 15.499-.429 20.24.429a64.9 64.9 0 00.429-7.546c0-35.695-28.49-64.702-63.547-64.702-35.046 0-63.536 29.007-63.536 64.702 0 35.706 28.49 64.713 63.536 64.713h2.937a88.858 88.858 0 01-1.265-17.49c.143-3.982.99-4.554 2.662-1.43 8.8 15.51 21.362 29.447 45.947 34.98 20.108 4.565 40.216 9.823 61.864 37.84 1.947 2.42-.979 4.972-3.212 2.981-22.066-19.91-42.174-26.455-60.467-26.455-20.537.154-34.496 2.86-48.609 2.86-53.064 0-96.074-43.824-96.074-97.867z"
    />
  </Svg>
);

export default SvgQiwi;
