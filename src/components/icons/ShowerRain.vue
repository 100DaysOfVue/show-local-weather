<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" width="500" height="500">
    <!-- clouds group -->
    <g stroke="#000" stroke-width="1.5">
    <!-- right cloud -->
      <path d="M471.8 151.53c4.98-35.4-3-46.71-14.69-55.08-17.33-12.36-33.78-12.62-50.02 0-2.45-26.57-19.86-30-22.05-33.33-19.62-6.77-33.35-4.83-44.14 4.34-10.79 9.19-18.53 26.1-20.59 28.99-22.99-16.88-38.39-6.53-42.64-7.24-12.5 6.13-21.8 14.83-25.02 26.09-5.04 8.96-4.06 19.61 0 31.88-16 11.64-17.21 20.88-19.12 23.2-1.69 6.26-7.52 23.7 2.95 39.13 4.39 6.48 12.23 11.79 23.53 15.94h204.45c20.71-14.04 33.53-31.79 32.36-44.93-1.73-19.07-12.65-25.89-25.02-28.99z" fill="url(#b)"/>
      <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="363.64" y1="59.08" x2="363.64" y2="225.45">
        <stop offset="0%" stop-color="#585858">
          <animate attributeName="stop-color" dur="3s" values="#d3cdcd; #585858; #d3dcdc; #585858" />
        </stop>
        <stop offset="100%" stop-color="#d3cdcd">
          <animate attributeName="stop-color" dur="3s" values="#585858; #d3cdcd; #585858; #d3cdcd" />
        </stop>
      </linearGradient>
      <!-- left cloud -->
      <path d="M390.5 252.19c7.99-52.91-4.81-69.81-23.59-82.3-27.8-18.48-54.21-18.85-80.25 0-3.93-39.7-31.87-44.83-35.4-49.81-31.47-10.11-53.5-7.22-70.81 6.49-17.31 13.72-29.74 38.99-33.04 43.32-36.9-25.22-61.6-9.75-68.45-10.83-20.06 9.16-34.97 22.16-40.12 38.99-8.11 13.38-6.51 29.28 0 47.63-25.67 17.4-27.61 31.18-30.68 34.66-2.71 9.35-12.08 35.4 4.73 58.46 7.04 9.67 19.64 17.63 37.75 23.82H378.7c33.26-20.99 53.82-47.49 51.93-67.12-2.76-28.49-20.29-38.69-40.13-43.31z" fill="url(#d)"/>
      <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="216.93" y1="114.05" x2="216.93" y2="362.62">
        <stop offset="0%" stop-color="#fff">
          <animate attributeName="stop-color" dur="3s" values="#555; #bfbfbf; #fff; #555; #bfbfbf; #fff" />
        </stop>
        <stop offset="51.877%" stop-color="#bfbfbf">
          <animate attributeName="stop-color" dur="3s" values="#fff; #555; #bfbfbf; #fff; #555; #bfbfbf" />
        </stop>
        <stop offset="100%" stop-color="#555">
          <animate attributeName="stop-color" dur="3s" values="#bfbfbf; #fff; #555; #bfbfbf; #fff; #555" />
        </stop>
      </linearGradient>
    </g>
    <!-- raindrops from left to right from 1 to 4 -->
    <g fill="#006bff">
      <!-- water drop 1 -->
      <path class="waterdrop" d="M57.55 382.7c0-13.67 8.78-24.78 19.61-45.66C88 357.92 96.78 369.03 96.78 382.7c0 13.7-8.78 24.8-19.62 24.8-10.83 0-19.61-11.1-19.61-24.8z"/>
      <!-- water drop 2 -->
      <path class="waterdrop" d="M149.71 357.53c0-13.7 8.78-24.8 19.61-45.68 10.82 20.88 19.6 31.98 19.6 45.68 0 13.68-8.78 24.78-19.6 24.78-10.83 0-19.61-11.1-19.61-24.78z"/>
      <!-- water drop 3 -->
      <path class="waterdrop" d="M245.25 373.06c0-13.68 8.78-24.79 19.6-45.67 10.85 20.88 19.63 31.99 19.63 45.67 0 13.69-8.78 24.79-19.63 24.79-10.82 0-19.6-11.1-19.6-24.79z"/>
      <!-- water drop 4 -->
      <path class="waterdrop" d="M342.11 408.29c0-13.68 8.78-24.78 19.6-45.67 10.84 20.89 19.63 31.99 19.63 45.67 0 13.69-8.79 24.8-19.63 24.8-10.82 0-19.6-11.11-19.6-24.8z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ShowerRain'
}
</script>
