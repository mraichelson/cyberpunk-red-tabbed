# Cyberpunk Red Tabbed

A character sheet for use on Roll20.

## About

This project builds the single character sheet and CSS file using Webpack. As such, Node.js is required on the machine you want to work with this on.

## Setup

- Install Node.js for your system.
- Fork and clone the repository.
- `cd` into the respository and run `npm install` to install the dependencies for building things.
- run the build tool...
  - `npm run build:ongoing` will watch for changes and regenerate everything when you save a file. (This is a little weird since if you're working in SCSS files it will delete the compiled HTML file. Saving an HTML/EJS file will make the HTML output file get created again.)
  - `npm run build` will do a one-off build.

## Moving things to Roll20

- Only the HTML and CSS from the `dist` directory (not stored in the repository) need to be submitted to Roll20 for inclusion as a character sheet.

## Finding Mike

If you need to reach me I can be found...

- On Github as mraichelson
- On Twitter as @MRaichelson
