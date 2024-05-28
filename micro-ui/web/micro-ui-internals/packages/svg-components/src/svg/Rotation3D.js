import React from "react";
import PropTypes from "prop-types";

export const Rotation3D = ({ className, height = "24", width = "24", style = {}, fill = "#7a2829", onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_3)">
        <path
          d="M7.5198 21.48C4.2498 19.94 1.9098 16.76 1.5498 13H0.0498047C0.559805 19.16 5.7098 24 11.9998 24L12.6598 23.97L8.8498 20.16L7.5198 21.48ZM8.4098 14.96C8.2198 14.96 8.0398 14.93 7.8898 14.88C7.7298 14.82 7.5998 14.75 7.4898 14.64C7.3798 14.54 7.2898 14.42 7.2298 14.27C7.1698 14.13 7.1398 13.97 7.1398 13.8H5.8398C5.8398 14.16 5.9098 14.48 6.0498 14.75C6.1898 15.02 6.3798 15.25 6.6098 15.44C6.8498 15.62 7.1198 15.76 7.4298 15.85C7.7298 15.95 8.0498 16 8.3898 16C8.7598 16 9.1098 15.95 9.4198 15.85C9.7398 15.75 10.0198 15.6 10.2498 15.41C10.4798 15.22 10.6698 14.98 10.7998 14.69C10.9298 14.4 10.9998 14.08 10.9998 13.72C10.9998 13.53 10.9798 13.34 10.9298 13.16C10.8798 12.98 10.8098 12.81 10.6998 12.65C10.5998 12.49 10.4598 12.35 10.2998 12.22C10.1298 12.09 9.9298 11.99 9.6898 11.91C9.8898 11.82 10.0598 11.71 10.2098 11.58C10.3598 11.45 10.4798 11.31 10.5798 11.16C10.6798 11.01 10.7498 10.86 10.7998 10.7C10.8498 10.54 10.8698 10.38 10.8698 10.22C10.8698 9.86 10.8098 9.54 10.6898 9.26C10.5698 8.98 10.3998 8.75 10.1798 8.57C9.9798 8.38 9.7098 8.24 9.4098 8.14C9.0998 8.05 8.7598 8 8.3898 8C8.0298 8 7.6998 8.05 7.3898 8.16C7.0898 8.27 6.8198 8.42 6.5998 8.61C6.3898 8.8 6.2198 9.02 6.0898 9.28C5.9698 9.54 5.9098 9.82 5.9098 10.13H7.2098C7.2098 9.96 7.2398 9.81 7.2998 9.68C7.3598 9.55 7.4398 9.43 7.5498 9.34C7.6598 9.25 7.7798 9.17 7.9298 9.12C8.0798 9.07 8.2298 9.04 8.4098 9.04C8.8098 9.04 9.1098 9.14 9.2998 9.35C9.4898 9.55 9.5898 9.84 9.5898 10.21C9.5898 10.39 9.5598 10.55 9.5098 10.7C9.4598 10.85 9.3698 10.97 9.2598 11.07C9.1498 11.17 9.0098 11.25 8.8498 11.31C8.6898 11.37 8.4898 11.4 8.2698 11.4H7.4998V12.43H8.2698C8.4898 12.43 8.6898 12.45 8.8698 12.5C9.0498 12.55 9.1998 12.63 9.3198 12.73C9.4398 12.84 9.5398 12.97 9.6098 13.13C9.6798 13.29 9.7098 13.48 9.7098 13.7C9.7098 14.11 9.5898 14.42 9.3598 14.63C9.1298 14.86 8.8098 14.96 8.4098 14.96V14.96ZM16.9598 9.04C16.6398 8.71 16.2598 8.45 15.8198 8.27C15.3898 8.09 14.8998 8 14.3598 8H11.9998V16H14.2998C14.8498 16 15.3598 15.91 15.8098 15.73C16.2598 15.55 16.6498 15.3 16.9698 14.97C17.2898 14.64 17.5398 14.24 17.7098 13.78C17.8798 13.31 17.9698 12.79 17.9698 12.21V11.81C17.9698 11.23 17.8798 10.71 17.7098 10.24C17.5298 9.77 17.2798 9.37 16.9598 9.04V9.04ZM16.5698 12.2C16.5698 12.62 16.5198 12.99 16.4298 13.33C16.3298 13.66 16.1898 13.95 15.9998 14.18C15.8098 14.41 15.5698 14.59 15.2898 14.71C14.9998 14.83 14.6698 14.89 14.2998 14.89H13.3898V9.12H14.3598C15.0798 9.12 15.6298 9.35 15.9998 9.81C16.3798 10.27 16.5698 10.93 16.5698 11.8V12.2V12.2ZM11.9998 0L11.3398 0.03L15.1498 3.84L16.4798 2.51C19.7498 4.06 22.0898 7.23 22.4398 10.99H23.9398C23.4398 4.84 18.2898 0 11.9998 0Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_3">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



Rotation3D.propTypes = {
  /** custom width of the svg icon */
  width: PropTypes.string,
  /** custom height of the svg icon */
  height: PropTypes.string,
  /** custom colour of the svg icon */
  fill: PropTypes.string,
  /** custom class of the svg icon */
  className: PropTypes.string,
  /** custom style of the svg icon */
  style: PropTypes.object,
  /** Click Event handler when icon is clicked */
  onClick: PropTypes.func,
};
