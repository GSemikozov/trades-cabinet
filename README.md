# Simple starter kit for static front-end projects
developed to create html/css layouts based on own slyleguide, dependencies etc.

## Installation

- Clone "Master" Project into local directory:
```bash
git clone git@git.int.fxservice.com:ONPR/static-frontend.git
```

- Run `npm install` for installing all dependencies:
```bash
cd static-frontend
npm install
```

*Also if need to add some additional components/libraries for the framework - just use bower.json in this case.
Add all necessary components as dependencies in bower.json file and run `bower install` in your root directory:*
```bash
bower install
```
*all components will appear in 'components' directory. Just  plug them in your view.*

## Usage

- to compile all styles from scss to css use next command:
`gulp sass`.

- to minify all styles - use next command:
`gulp css-minify`.

- to compile and minify all styles - use next command:
`gulp css`.

- to minify all images - use next command:
`gulp imgmin` or `gulp images`.

- to compile js-scripts and if need concat them into bundle.js - use next command:
`gulp scripts`.

- to watch your changes in scss/js/html files in development mode - use next command:
`gulp serv`.
Then you'll be able to serv your project here - localhost:8080

- as default task you can use next command:
`gulp` ( == gulp css + gulp imgmin + gulp scripts + gulp server + gulp livereload + gulp watch).

## Usage of scss partials (based on flexboxes)

All new scss modules/components are adding in 'src/scss/partials' directory. Then new file is including in 'custom.scss'.

Currently we have next (empty) Partials:

Components:
- header,
- navbar,
- footer,

Helpers:
- additional-classes,
- spacing-classes,

Grid:
- grid,

Variables:
- variables (global),
- theme-variables,

Mixins:
- `respond-to()` - responsive utilities;
- `themify()` - we have three themes: default, blue and violet;
- `no-selection()` - for select;
- `ellipsis()` and `multiLineEllipsis()` - for text that has a limited amount of rows;
-  `button-bg()` - to create new buttons with own background- font- and border-color;
