# Cyberpunk Red Tabbed

A character sheet for [Cyberpunk Red](https://rtalsoriangames.com/cyberpunk/) by [R. Talsorian Games](https://rtalsoriangames.com/) for use on Roll20.

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

## Credits

- This was assembled with the support of the [High Shelf Gaming podcast](https://highshelfgaming.com/) community, and the particular support of [David/@HighShelfGaming](https://twitter.com/highshelfgaming) and [@Kratrina](https://twitter.com/kratrina).
- There's still some solid code-DNA in here from other projects that preceded and informed this work...
  - The [Foundry VTT system tutorial](https://gitlab.com/asacolips-projects/foundry-mods/foundryvtt-system-tutorial) by Asacolips.
  - The [Cyberpunk Red beta character sheet](https://github.com/Gerdofal/roll20-CyberpunkRED_Gerdofal_BETA) by Gerdofal.
- Thanks to my long-time friend and technical savior [@longfilename](https://github.com/longfilename) for getting the webpack/EJS side of this organized.

![High Shelf Gaming](https://cyberpunk-red-tabbed.netlify.app/hsg-logo.png =300x)

This sheet was made with the support of the High Shelf Gaming podcast community.

- [Check out the podcast](https://highshelfgaming.com/)
- [Come watch members of the community play games on Twitch](https://www.twitch.tv/highshelfgaming)
- [Follow HSG on Twitter](https://twitter.com/highshelfgaming)
- [Join us on Discord](https://discord.gg/KupFVcw)

## Finding Mike

If you need to reach me I can be found...

- On Github as [@MRaichelson](https://github.com/mraichelson)
- On Twitter as [@MRaichelson](https://twitter.com/MRaichelson)
