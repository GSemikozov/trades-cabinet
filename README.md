# Simple starter kit for the project
developed to create html/css layout based on multitrade-page.png as main mockup.

## Description
Task for paxfull company.
- clear html5/css3 without using any css-frameworks,
- css compiling from scss,
- dev-server, live-reload, html/css/js compilation, images optimization realised via gulp,
- vanilla javascript - for some js functionality ('release-bitcoins' button, tabs, mobile menu and chat room (messages saves to localStorage)).

## Installation

- Clone "Master" Project into local directory:
```bash
git clone git@github.com:GSemikozov/trades-cabinet.git
```

- Run `npm install` for installing all dependencies:
```bash
npm install
```

- as default gulp task you can use next command:
`gulp` ( == gulp css + gulp imgmin + gulp scripts + gulp server + gulp livereload + gulp watch).
Then you'll be able to serv your project here - localhost:8080 (or static compiled index.html file from the dist directory will be opened automatically)

## Usage of scss partials (based on flexboxes)

All new scss modules/components are adding to 'src/scss/partials' directory. Then new file is including in 'custom.scss'.

Currently we have next partials:

Components:
- header,
- navbar,
- mobile-menu,
- main-content (tab-panel, tab-content),

Helpers:
- additional-classes,
- spacing-classes (commented),

Grid:
- grid,

Variables:
- variables (global),
- theme-variables,

Mixins:
- `respond-to()` - responsive utilities;
- `themify()` - we have three themes: default, blue and dark;
- `no-selection()` - for select;
- `ellipsis()` and `multiLineEllipsis()` - for text that has a limited amount of rows;
- `button-bg()` - to create new buttons with own background- font- and border-color;

## Vanilla Javascript partials (src/js/partials)
- chat,
-mobile-menu,
release-bitcoins,
tabs.
