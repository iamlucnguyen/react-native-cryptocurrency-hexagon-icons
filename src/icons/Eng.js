import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgEng = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="eng_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2f2f2f" />
        <Stop offset="100%" stopColor="#6d6d6d" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#eng_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M342.639 179.245c1.254.66 4.125 2.222 3.85 5.621l-.176 114.587a5.247 5.247 0 01-3.113 5.192l-25.3 14.773-20.02 11.682-53.284 31.108a3.85 3.85 0 01-2.354.792 5.731 5.731 0 01-3.003-.968l-36.762-21.208c-20.416-11.781-41.536-23.969-62.348-35.937-1.749-.847-2.772-2.816-2.618-5.06l.077-30.272c.066-27.236.11-54.901.132-81.653v-.11a4.356 4.356 0 00.011-.55v-.341c-.044-1.485-.11-4.532 2.75-5.907 11.66-6.963 23.584-14.036 35.123-20.878l19.107-11.33a48732.109 48732.109 0 0043.67-25.905l.11-.066a20.13 20.13 0 012.926-1.375l1.133-.44 1.056.627a11753.197 11753.197 0 0131.207 18.15l19.096 11.11 18.645 10.846 29.337 17.072h.022l.022.022.704.418zm-96.459 172.37l32.582-19.03a91936.702 91936.702 0 0059.257-34.573l.11-64.339.055-42.515-42.35 24.772v19.536a3177.24 3177.24 0 00.066 36.575v.836l-.495.682a6.292 6.292 0 01-2.024 1.76l-.286.176h-.011L279.4 283.47c-4.95 2.86-10.065 5.83-15.07 8.767l-18.084 10.505zM200.024 213.51a14329.139 14329.139 0 0027.764 15.917l14.344 8.239 41.547-24.288-41.613-24.552zm-4.29 7.15l.781 48.279 41.448 24.145.066-48.169zm-49.72-28.534l-.209 106.425 92.114 53.13.033-48.961-18.04-10.505-11.308-6.589a6270.48 6270.48 0 01-17.677-10.296c-1.705-.803-2.772-2.761-2.651-4.906l-.891-54.549zm188.034-8.206l-16.159-9.416-17.842-10.395a17345.598 17345.598 0 01-57.904-33.726 36547.28 36547.28 0 00-63.096 37.367l-28.886 17.127 41.558 23.815 47.674-27.995a4.928 4.928 0 015.5.11l47.036 27.731zm-87.802 109.197a21357.6 21357.6 0 0141.712-24.244V220.55l-41.679 24.354zm56.397-8.723a4.323 4.323 0 01-1.276.187 4.334 4.334 0 01-3.146-1.287 5.137 5.137 0 01-1.595-4.84 4.939 4.939 0 014.796-4.147c1.353 0 2.673.616 3.63 1.683l.011.022a5.17 5.17 0 01.858 5.544 4.697 4.697 0 01-3.278 2.838zm22.704 15.488a4.95 4.95 0 01-1.892-4.268c.088-1.749.99-3.3 2.442-4.18a4.466 4.466 0 012.42-.726c.946 0 1.87.297 2.684.847a5.06 5.06 0 012.222 5.027 5.005 5.005 0 01-4.939 4.411 4.477 4.477 0 01-2.937-1.111zm-145.079-25.52c1.375 0 2.684.627 3.597 1.716a5.06 5.06 0 01.847 5.456 4.862 4.862 0 01-4.576 3.014 5.016 5.016 0 01-4.708-6.116 5.038 5.038 0 014.84-4.07zm131.516 17.336a5.17 5.17 0 01-1.771-4.873 5.06 5.06 0 014.818-4.29c1.21 0 2.376.484 3.3 1.342 1.397 1.298 1.98 3.179 1.518 4.939a4.818 4.818 0 01-3.102 3.652 4.752 4.752 0 01-4.763-.77zm-141.955-7.953c1.463 1.21 2.145 3.135 1.771 4.917a4.796 4.796 0 01-2.794 3.674h-.011a5.016 5.016 0 01-2.09.484 4.686 4.686 0 01-2.442-.726 5.137 5.137 0 01-2.387-4.906 4.928 4.928 0 013.179-4.301 4.334 4.334 0 011.705-.352c1.1 0 2.167.418 3.069 1.21zm71.61-149.908c1.43 0 2.783.616 3.74 1.694 1.177 1.243 1.617 2.97 1.177 4.62a4.818 4.818 0 01-4.026 3.718h-.055a5.071 5.071 0 01-5.236-2.222 4.95 4.95 0 01-.297-4.862l.011-.022a5.016 5.016 0 013.872-2.849 4.664 4.664 0 01.825-.077zM155.65 291.39c1.595.902 2.563 2.53 2.552 4.29a4.994 4.994 0 01-2.321 4.488 4.983 4.983 0 01-2.684.814 4.389 4.389 0 01-2.244-.594 5.038 5.038 0 01-2.596-4.488c0-1.903.979-3.63 2.541-4.51a4.598 4.598 0 014.752 0zm88.44-124.135a5.038 5.038 0 012.365 4.62 4.873 4.873 0 01-2.992 4.169 5.368 5.368 0 01-2.2.484 4.961 4.961 0 01-3.113-1.056 4.884 4.884 0 01-1.958-4.389 4.84 4.84 0 012.563-4.004 4.95 4.95 0 012.486-.66 5.28 5.28 0 012.86.836zm-6.27-8.338a4.862 4.862 0 01-1.628-4.114v-.033a5.082 5.082 0 012.409-3.872 4.796 4.796 0 012.684-.803c.88 0 1.76.231 2.563.66l.011.011a4.939 4.939 0 012.596 4.499 4.939 4.939 0 01-3.025 4.51 5.379 5.379 0 01-2.2.484 4.862 4.862 0 01-3.41-1.342z"
      fill="#fff"
    />
  </Svg>
);

export default SvgEng;