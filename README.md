![HBUI](https://repository-images.githubusercontent.com/440312044/5e644c3a-c7d5-49fc-acc2-4076c6c8ba7f)

## HBUI - The Hummingbot Design System

This repository holds the source code and documentation of the [HBUI Hummingbot Design System](https://hbui.netlify.app/)

[Visit the documentation site](https://hbui.netlify.app/)

### The flow

The original design of this design system lives in a [Figma document](https://www.figma.com/file/0XddWJM8ObnpxEqZQyGLZ4/CoinAlpha-Design-System-1.2?node-id=724%3A7407). This package contains a custom script that extracts the design tokens from the Figma document (colors, fonts, spacings, breakpoints, shadows) and saves them in a `./hbui/tokens.js` file, which is then used to create a custom [TailwindCSS](https://tailwindcss.com/) configuration. This project also uses [twin.macro](https://github.com/ben-rogerson/twin.macro) to make use of TailwindCSS in a React-friendly manner. Finally, this project exports an [NPM module](https://www.npmjs.com/package/@hummingbot/hbui) that is in turn consumed by other projects.

### Use or try out out the HBUI Hummingbot design system

To use the HBUI design system, all you need is the [HBUI NPM module](https://www.npmjs.com/package/@hummingbot/hbui). But we recommend you start from one of the HBUI boilerplate projects (below) where everything is already set up for you. We have two types of boilerplate projects available:

[Gatsby](https://github.com/CoinAlpha/hbui-boilerplate-gatsby)

[Create-React-App](https://github.com/CoinAlpha/hbui-boilerplate-cra)

These are ready-to-run apps with everything already configured and ready to go.

### Instructions to run this project

If you wish to run the HBUI documentation locally, simply clone and run this project:

```bash
// Clone the project
git clone git@github.com:CoinAlpha/hbui.git hbui

// cd into the folder
cd hbui

// Install the dependencies
yarn

// Start up
yarn develop
```

The project will run on http://localhost:8000/

Alternatively, run this command to enable opening the site in the local network (eg. in your phone)

```bash
yarn develop-m
```

### Instructions to perform updates to the NPM module

To perform updates to the NPM module, a local script connects to the Figma API (v1) and downloads the updated design tokens into the file `./hbui/tokens.js`. To set up, it is necessary to create an `.env` file with the Figma file ID and a Figma API access token.

These are the steps:

1/5: First, make sure the app is running without errors.

2/5: Get a Figma API access token

3/5: Create a file called `.env` at the root of the project with the following content (replace Figma API access token with your own):

```shell
FIGMA_API_TOKEN=your-access-token
FIGMA_FILE_ID=hf03Mn2cecwA1ioUxlHg9P
```

The FIGMA_FILE_ID in the code above is our original Figma file for the HBUI design system. 

(If you are trying this outside Hummingbot, and you want to create your own NPM module, you should make a copy of our Figma file to get started, grab the file ID from your copy and replace the FIGMA_FILE_ID in the code above. You will also have to change the module name, author etc in the file `./npm_module/package.json`.)

4/5: You need to be logged into NPM as a user with authorisation to make updates to the @hummingbot space (or your own space if you're building your own NPM module).

```shell
npm login
```

5/5: If all the above is done, you are ready to make updates. There are three types of updates available:

```shell
// patch update (-.-.+)
npm run publish_patch

// minor update (-.+.-)
npm run publish_minor

// major update (+.-.-)
npm run publish_major
```

Alternatively, use the following script variant to automatically git-commits the changes with a commit message that includes the new version number: "Update NPM module to X.X.X". Remember to push the changes to the appropriate branch / PR.

```shell
// patch update (-.-.+)
npm run publish_patch_and_commit

// minor update (-.+.-)
npm run publish_minor_and_commit

// major update (+.-.-)
npm run publish_major_and_commit
```

### To simply update the design tokens

If you just want to test the latest design tokens, setup an `.env` file like explained above, pull the tokens and test the app:

```shell
// pull the tokens
yarn pull-tokens

// test the app
yarn develop
```

### Relevant links to this project

[HBUI Hummingbot Design System](https://hbui.netlify.app/) Documentation

HBUI [NPM module](https://www.npmjs.com/package/@hummingbot/hbui)

[Gatsby](https://github.com/CoinAlpha/hbui-boilerplate-gatsby) HBUI Boilerplate

[Create-React-App](https://github.com/CoinAlpha/hbui-boilerplate-cra) HBUI Boilerplate

### Useful references

[Gatsby Documentation](https://www.gatsbyjs.com/docs/)

[TailwindCSS Documentation](https://tailwindcss.com/docs)

TailwindCSS for React: [twin.macro](https://github.com/ben-rogerson/twin.macro)

### Todo

- Make the build script compatible with Windows