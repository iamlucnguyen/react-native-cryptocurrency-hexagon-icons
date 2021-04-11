import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgSpank = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="spank_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ff3b81" />
        <Stop offset="100%" stopColor="#ff75a6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#spank_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M159.049 309.551v1.551h-16.247v-29.337l-.506 1.628-15.521-4.686 8.767-28.27-1.078 1.584L121 243.078l16.83-24.574-1.606 1.276-10.23-12.43 24.211-19.316-3.08 1.177-5.83-14.938 28.919-10.934-3.388.22-1.122-15.95 30.272-2.09-2.739-.616 3.652-15.587 28.93 6.578-1.826-1.034L232.1 121l25.223 14.344-.99-1.034 11.88-10.912 19.646 20.746-.418-.836 14.597-7.018 12.606 25.454-.11-.715 16.027-2.508 4.73 29.403.33-2.09 16.049 2.497-4.796 29.832 1.177-2.398 14.597 7.018-13.508 27.291 1.98-2.09 11.869 10.923-20.999 22.176 2.541-1.441 8.118 13.86-26.389 15.004 2.651-.605 3.663 15.587-29.172 6.633 2.255.154-1.133 15.961-29.194-2.013 1.485.561-5.83 14.938-27.94-10.56 1.771 1.408L234.597 363l-23.067-18.403 1.144 1.661-13.464 8.954-16.5-24.09.495 1.584-15.532 4.686zm0-19.008l10.142-3.058 7.876 25.41 8.778-5.83 14.982 21.89 6.699-8.14 20.768 16.566 3.718-9.537 25.036 9.46.726-10.329 26.796 1.848-2.42-10.285 26.268-5.973-5.445-9.284 23.441-13.332-8.03-7.37 18.513-19.558-9.878-4.752 11.913-24.046-10.802-1.694 4.246-26.4-10.34 1.606-4.235-26.4-9.306 4.466-11.825-23.87-7.59 6.963-18.282-19.327-5.236 8.932-23.155-13.167-2.398 10.208-26.048-5.929.759 10.659-26.741 1.837 3.949 10.153-25.19 9.526 6.787 8.239-21.142 16.863 8.921 5.929-15.224 22.253 10.263 3.102-7.953 25.641h10.67zm79.75-29.975c0-4.048-1.43-7.139-4.279-9.284-2.86-2.189-7.975-4.477-15.389-6.853-7.414-2.42-13.277-4.807-17.6-7.15-11.77-6.38-17.666-14.96-17.666-25.773 0-5.621 1.562-10.626 4.697-15.004 3.19-4.433 7.722-7.887 13.607-10.362 5.94-2.475 12.595-3.707 19.954-3.707 7.414 0 14.014 1.353 19.8 4.07 5.797 2.662 10.285 6.446 13.475 11.352a29.7 29.7 0 014.84 16.72h-21.373c0-4.763-1.496-8.459-4.488-11.077-2.992-2.662-7.194-3.993-12.606-3.993-5.225 0-9.295 1.111-12.188 3.355a10.395 10.395 0 00-4.345 8.712c0 3.377 1.683 6.215 5.06 8.503 3.41 2.277 8.426 4.422 15.026 6.424 12.166 3.663 21.021 8.217 26.576 13.64 5.566 5.434 8.338 12.199 8.338 20.284 0 9.009-3.399 16.071-10.186 21.219-6.798 5.093-15.939 7.645-27.434 7.645a53.218 53.218 0 01-21.802-4.356c-6.545-2.959-11.561-6.985-15.026-12.078-3.421-5.093-5.137-11-5.137-17.71h21.45c0 11.473 6.842 17.215 20.515 17.215 5.082 0 9.053-1.023 11.902-3.08a10.208 10.208 0 004.279-8.712zm65.23-63.778l-20.603 75.372-16.973-1.188 12.837-77.704zm-17.974 83.226l-5.357 26.631-22.572-6.589 5.181-25.542z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSpank;
