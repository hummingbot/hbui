## HBUI Boilerplate for Gatsby Projects

This repository holds the source code and documentation of the [HBUI Hummingbot Design System](https://hbui.netlify.app/)

[Visit the documentation site](https://hbui.netlify.app/)

### The flow

The original design of this design system lives in a [Figma document](https://www.figma.com/file/0XddWJM8ObnpxEqZQyGLZ4/CoinAlpha-Design-System-1.2?node-id=724%3A7407). This Figma document is connected to a private [Specify](https://specifyapp.com/) account that takes care of synchronizing all the design values (design tokens) and makes it possible to export the design tokens in a [TailwindCSS](https://tailwindcss.com/)-compatible format that is turned into the custom TailwindCSS configuration of this React project, supported by [twin.macro](https://github.com/ben-rogerson/twin.macro) to make it React-friendly. Finally, this projects has the ability to export a [NPM module](https://www.npmjs.com/package/@hummingbot/hbui) that is consumed by other projects.


### Use or try out out the HBUI Hummingbot design system

This repository is the HBUI documentation site. To use the HBUI design system, you should start from one of the boilerplate projects. They are ready-to-run apps with everything already configured for you to start your own project using HBUI. There are two types of boilerplate projects available:

[Gatsby](https://github.com/CoinAlpha/hbui-boilerplate-gatsby)
[Create-React-App](https://github.com/CoinAlpha/hbui-boilerplate-cra)

### Instructions to run this project

If you wish to run the HBUI documentation locally, simply clone and run this project:

```bash
// Clone the project
git clone git@github.com:CoinAlpha/hbui.git hbui

// cd into the folder
cd hbui

Install the dependencies
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

To perform updates to the NPM module, a script connects to the Specify account and downloads the updated design tokens. Since this Specify account is private, only Hummingbot team members have access. If you have access, log in to the Specify account and get a `personalAccessToken`.

These are the steps:

1/7: Perform your updates and test them locally

2/7: Log in to [Specify](https://specifyapp.com/) and get your `personalAccessToken`

3/7: Install the Specify CLI in your system

```shell
yarn global add @specifyapp/cli
```

4/7: Create a file called `.specifyrc.json` at the root of the project with the following content (replace your personal access token):

```shell
{
  "repository": "@hummingbot/ds",
  "personalAccessToken": "your personalAccessToken here",
  "rules": [
    {
      "name": "Design Tokens",
      "path": "tokens/index.js",
      "parsers": [
        {
          "name": "to-tailwind",
          "options": {
            "formatName": "kebabCase",
            "formatTokens": {
              "colorFormat": {
                "format": "hex"
              },
              "fontSizeFormat": {
                "unit": "rem"
              }
            },
            "splitBy": "/",
            "formatConfig": {
              "objectName": "extend",
              "module": "commonjs"
            }
          }
        }
      ]
    }
  ]
}

```

5/7: Test if your Specify connection is working by pulling the design tokens

```shell
specify pull
```


6/7: You need to be logged into NPM as a user with authorisation to make updates to the @hummingbot space.

```shell
npm login
```

7/7: If all the above is done, you are ready to make updates, There are three types of updates available:

```shell
// patch update (-.-.+)
npm run publish_patch

// minor update (-.+.-)
npm run publish_minor

// major update (+.-.-)
npm run publish_major
```

Recommended: Alternatively, use the following script variant to automatically git-commits the changes with a commit message that includes the new version number: "Update NPM module to X.X.X". Remember to push the changes to the appropriate branch / PR.

```shell
// patch update (-.-.+)
npm run publish_patch_and_commit

// minor update (-.+.-)
npm run publish_minor_and_commit

// major update (+.-.-)
npm run publish_major_and_commit
```

### To just update the design tokens

If you just want to test the latest design tokens, do the Specify setup like explained above, pull the tokens and test the app:

```shell
// pull the tokens
specify pull

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