# show-weather

An app to tell you the weather of your location or another city you want to search.

This app was made for [#100DaysOfCode](https://www.100daysofcode.com/).

This project also belongs to #100DaysOfVue initiative.

## Additional used components

- [Vue.js framework](https://vuejs.org/).
- [Open weather API](http://openweathermap.org/).
- [gravit](https://gravit.io/) and [vectr](https://vectr.com/) for svg icons.
- The amazing [SVGMG](https://jakearchibald.github.io/svgomg/) to compress the svg file.

## Learned during the process

- I learned to [BEM](http://getbem.com/introduction/) for CSS styles.
- How use a design program (a little bit :sweat_smile:)
- I understood a little bit more about svg:
  - That `defs` tag is used to "define" the `path` to draw but It not rendered immediately. For render the paths needs a `use` tags with and `href` attribute with de id of the path to render.
  - The `path` and `use` tag can be grouped with the tag `g`. This `g` tag is useful to apply styles (e.g. fill, stroke, stroke-width) to all `path` inside of it much faster.
  
    ```
    <g fill="black" stroke-width="3px" stroke="yellow">
      <!-- All paths inside here have the properties of g tag
    </g>
    ```
  - How animate svg gradientes with `animate` tag.
- I learned to use [Dynamic imports](https://medium.com/scrumpy/dynamic-component-templates-with-vue-js-d9236ab183bb) with vue. :muscle:
- How better use CSS custom properties for faster responsive design.
- How to apply vue animations.
- How to do error management with vue using fetch api.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
