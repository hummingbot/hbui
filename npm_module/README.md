## Hummingbot UI library

WIP - contributions welcome


### Getting started

This module contains a library of UI components and elements as well as configuration files.

#### To use the components and elements:

For example, you can import and use a button like this:

```shell
import { Button } from '@hummingbot/hbui/elements/button'

<Button>
  Default
</Button>
```

Please refer to the documentation website for more: https://hbui.netlify.app/



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

1: Build the module
2: Bump the version in package.json
3: Publish with this command:

```shell
npm publish
```
