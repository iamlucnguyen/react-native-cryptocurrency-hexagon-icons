import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgWgr = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="wgr_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#b80000" />
        <Stop offset="100%" stopColor="#ff1a1a" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#wgr_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M350.823 191.257c1.716 2.915 1.485 5.973-.22 8.965-2.552 4.07-4.906 8.217-7.337 12.32-6.666 11.396-13.332 22.792-20.02 34.188a69774.595 69774.595 0 01-40.084 68.002 8.14 8.14 0 01-7.821 4.257c-3.377-.154-5.775-1.826-7.37-4.741-1.639-2.915-3.344-5.797-5.06-8.701-5.61-9.592-11.242-19.162-16.863-28.721-1.254-2.167-2.541-4.29-3.982-6.688-1.408 2.387-2.739 4.51-3.993 6.688l-16.863 28.71a406.89 406.89 0 00-5.06 8.712c-1.595 2.915-3.982 4.587-7.37 4.741a8.206 8.206 0 01-7.821-4.257c-6.347-10.681-12.617-21.362-18.92-32.087a10337.833 10337.833 0 01-21.164-35.915 18373.118 18373.118 0 00-20.02-34.188c-2.42-4.103-4.818-8.25-7.326-12.32-1.826-2.992-2.09-6.05-.385-8.965 1.672-2.871 4.367-4.257 7.832-4.257 21.648.077 43.307.22 64.955.033 5.467-.033 8.734 2.057 11.286 6.611 5.467 9.757 11.286 19.272 16.907 28.919 2.354 4.07 4.675 8.173 7.062 12.243.187.297.495.528.77.781a2.992 2.992 0 00.748-.77c2.365-4.07 4.675-8.184 7.073-12.254 5.654-9.647 11.44-19.206 16.907-28.919 2.541-4.554 5.808-6.644 11.275-6.6 21.659.176 43.307.033 64.966-.044 3.531 0 6.226 1.386 7.898 4.257zM231.55 254.562a3.443 3.443 0 00.033-2.871c-1.1-2.244-2.552-4.367-3.839-6.578-7.744-13.222-15.499-26.4-23.21-39.655-.792-1.353-1.705-1.837-3.3-1.837-14.432.077-28.875.077-43.307.11-.682 0-1.364.11-2.354.187 17.622 30.063 35.09 59.906 52.767 90.046 1.518-2.53 2.805-4.554 4.026-6.644a4242.725 4242.725 0 0019.184-32.758zm44.11 39.402c17.655-30.14 35.134-59.983 52.8-90.046-1.023-.077-1.672-.187-2.354-.187-14.443-.033-28.875-.033-43.307-.11-1.595 0-2.508.484-3.3 1.826a31398.18 31398.18 0 01-23.21 39.666c-1.298 2.167-2.706 4.29-3.85 6.578a3.454 3.454 0 000 2.871 8793.127 8793.127 0 0019.195 32.758c1.21 2.09 2.508 4.147 4.026 6.644z"
      fill="#fff"
    />
  </Svg>
);

export default SvgWgr;
