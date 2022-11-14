## HBUI Boilerplate for Gatsby Projects

This is a ready-to-use Gatsby project with full integration of the [HBUI Hummingbot Design System](https://hbui.netlify.app/)

See [Demo](https://hbui-boilerplate-gatsby.netlify.app/)

Use this template if you need to build a standard website where SEO is important. If you are looking to build a SPA app, consider using the [Create-React-App](https://github.com/CoinAlpha/hbui-boilerplate-cra) boilerplate instead.

### Instructions

Clone the project

```bash
git@github.com:CoinAlpha/hbui-boilerplate-gatsby.git
```

Install the dependencies

```bash
yarn
```

Start up

```bash
yarn develop
```

The project will run on http://localhost:8000/


Alternatively, run this command to be able to open the site in the local network (eg. in your phone)

```bash
yarn develop-m
```

### References

[Gatsby Documentation](https://www.gatsbyjs.com/docs/)

[HBUI Hummingbot Design System](https://hbui.netlify.app/)

[TailwindCSS Documentation](https://tailwindcss.com/docs)

TailwindCSS for React: [twin.macro](https://github.com/ben-rogerson/twin.macro)


#### To update design tokens:

1/3: Make sure you have a Specify `personalAccessToken` and the Specify CLI installed in your system:

```shell
yarn global add @specifyapp/cli
```

2/3: Create a file called `.specifyrc.json` at the root of the project with the following content (replace your personal access token):

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


3/3: update the design tokens:

```shell
specify pull
```

#### To build the npm module:

Make sure the dependencies are installed before building

```shell
yarn
yarn pack_all
```

#### To publish the project:

1: Bump the version in package.json
2: Publish with this command:

```shell
yarn build_module_and_publish
```
