<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" width="500" height="500">
     <!-- white circle -->
    <path d="M119.2 222.26c0-109.9 84.93-199.12 189.53-199.12 104.61 0 189.54 89.22 189.54 199.12 0 109.91-84.93 199.12-189.54 199.12-104.6 0-189.53-89.21-189.53-199.12z" fill="#fdfdfd" stroke="#000" stroke-width="1.5"/>
    <!-- black circle -->
    <path d="M168.52 80.45C240.29 4.96 346.73-5.63 406.1 56.83c59.36 62.44 49.3 174.46-22.45 249.96-71.77 75.49-178.21 86.1-237.57 23.64-59.37-62.46-49.31-174.48 22.44-249.98z" fill="#020202"/>
    <!-- stars group -->
    <g fill="#fff" stroke="#000" stroke-width="1">
        <!-- right star -->
        <path class="star" d="M317.48 132.09l-4.17-32.6-21.8 23.16-30.43-6.06 14.15 29.33-14.62 28.84 30.51-5.04 21.39 23.9 4.73-32.45 27.85-14.09-27.61-14.99z" stroke-opacity="0" />
        <!-- left star -->
        <path class="star" d="M175.62 83.05l-6.64-50.71-33.21 35.86-46.68-9.7 21.9 45.72-22.22 44.74 46.75-7.59 32.95 37.33 7-50.42 42.58-21.67-42.43-23.56z"/>
    </g>
    <!-- cloud -->
    <path d="M436.15 343.29c8.86-60.07-5.35-79.29-26.19-93.47-30.83-20.99-60.13-21.43-89.03 0-4.37-45.12-35.36-50.94-39.29-56.58-34.91-11.48-59.36-8.21-78.57 7.38-19.18 15.57-32.98 44.27-36.65 49.2-40.94-28.66-68.34-11.08-75.94-12.3-22.26 10.38-38.82 25.17-44.52 44.27-9 15.22-7.22 33.27 0 54.13-28.5 19.76-30.65 35.43-34.04 39.35-3.01 10.63-13.41 40.24 5.24 66.43 7.82 10.99 21.78 20.02 41.89 27.07h364c36.91-23.85 59.72-53.96 57.62-76.27-3.05-32.36-22.52-43.95-44.52-49.21z" id="e" stroke="#000" stroke-width="1.5" fill="url(#f)" />
    <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="243.56" y1="186.39" x2="243.56" y2="468.77">
      <stop offset="0%" stop-color="#fff">
        <animate attributeName="stop-color" values="#b6b6b6; #dcdcdc; #f2f2f2; #fff" dur="3s" />
      </stop>
      <stop offset="44.318%" stop-color="#f2f2f2" >
        <animate attributeName="stop-color" values="#dcdcdc; #b6b6b6; #fff; #f2f2f2" dur="3s" />
      </stop>
      <stop offset="78.907%" stop-color="#dcdcdc">
        <animate attributeName="stop-color" values="#f2f2f2; #fff; #b6b6b6; #dcdcdc" dur="3s" />
      </stop>
      <stop offset="100%" stop-color="#b6b6b6">
        <animate attributeName="stop-color" values="#fff; #f2f2f2; #dcdcdc; #b6b6b6" dur="3s" />
      </stop>
    </linearGradient>
  </svg>
</template>

<script>
export default {
  name: 'FewCloudsMoon'
}
</script>
