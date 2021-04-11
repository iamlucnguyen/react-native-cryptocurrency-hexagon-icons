import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgBtch = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="btch_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#4700c2" />
        <Stop offset="100%" stopColor="#7221ff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#btch_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M216.502 225.61c-3.41 2.222-7.315 4.576-11.363 7.04v22.231a523.822 523.822 0 0111.363-5.599v-23.683zm-56.837 41.107a8.569 8.569 0 0011.44 3.74l10.626-5.357c.066-8.932.11-15.719.11-18.414v-.715c-9.02 4.488-15.862 7.931-18.491 9.24a8.547 8.547 0 00-3.685 11.506zm60.049-2.255a8.47 8.47 0 008.47 8.503h.099a8.503 8.503 0 008.492-8.503v-70.433a8.514 8.514 0 00-9.614-8.437 8.448 8.448 0 00-7.414 8.404v35.178c-.033 11.814-.033 23.54-.033 35.288z" />
      <Path d="M340.835 209.913c-.539-4.114-3.267-6.402-7.414-7.48-3.3-.847-6.71-1.012-10.186-1.045-8.096-.033-16.126 1.276-24.09 2.827a318.182 318.182 0 00-34.067 8.58c-3.377 1.034-6.71 2.112-10.087 3.19l-.033-.132.605-.506c6.512-5.566 12.98-11.132 19.536-16.632 14.366-12.144 27.324-25.465 39.358-39.523 3.278-3.817 6.105-7.898 7.557-12.551 2.2-6.985-.264-11.33-7.348-13.288a36.278 36.278 0 00-9.174-1.012c-6.754-.033-13.42 1.078-20.009 2.42-6.875 1.43-16.83 3.96-23.573 6.006-10.791 3.3-24.123 8.976-36.025 13.794-6.072 2.365-12.54 5.401-18.59 7.766l-22.869 9.306c-30.36 13.057-39.193 3.674-39.193 3.674 0 .044.011.077.033.11a1.012 1.012 0 01-.132-.275c-5.907 11.638-.99 32.78 33.154 17.677 5.368-2.09 10.824-4.356 16.159-6.413 10.285-4.015 20.471-8.976 30.8-12.947a574.75 574.75 0 0121.483-8.338l6.512-2.53c6.677-2.2 13.354-4.378 20.163-6.072 7.425-1.914 13.904-3.069 17.82-2.563.396.033.803.066 1.177.143 1.782.231 2.728 1.177 2.563 2.42-.066 1.925-3.168 8.305-31.405 31.812-2.057 1.76-4.114 3.542-6.171 5.291-3.168 2.739-6.237 5.434-9.35 8.14l-2.596 2.288-.033.033-1.21 1.078a2.453 2.453 0 01-.308.275l-.297.264-2.365 1.793a6.765 6.765 0 01-.506.44v29.843c9.988-3.41 58.586-19.624 63.822-14.872.407.55 6.578 4.389-49.929 43.043-2.222 1.683-4.378 3.366-6.6 5.06l-8.173 6.237c-10.219 7.392-20.372 14.806-30.58 22.198l-4.433 3.201c-.066 8.063-.099 15.785-.132 22.88l107.8-79.552a211.156 211.156 0 0018.656-17.776c3.3-3.531 6.27-7.282 8.228-11.561 1.012-2.233 1.76-4.389 1.452-6.71zM165.198 332.255a9.108 9.108 0 00.572 12.045 9.031 9.031 0 0011.209 1.551l4.312-3.168c.033-6.479.11-14.366.165-22.88l-14.564 10.802a9.79 9.79 0 00-1.694 1.65z" />
      <Path d="M202.004 208.395a8.514 8.514 0 00-9.35-6.237 8.448 8.448 0 00-7.414 8.404v35.178c0 7.117-.308 42.438-.572 71.742-.066 8.404-.143 16.291-.176 22.88-.066 8.36-.099 14.63-.099 17.193a8.47 8.47 0 008.47 8.503h.099a8.503 8.503 0 008.503-8.503c0-5.896.066-16.665.132-29.854.033-7.04.11-14.806.132-22.869.242-36.663.572-79.86.55-94.27a9.449 9.449 0 00-.275-2.167z" />
    </G>
  </Svg>
);

export default SvgBtch;
