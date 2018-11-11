# pi_sockets
Testing Socket.io on the Raspberry Pi

## Usage

The express server is setup to use the build directory for create-react-app.

To setup autobuild for react, use npm-watch.

[react autobuild instructions](https://stackoverflow.com/a/42773333)

Here are the setup instructions. These are already in the package.json, but this is a reference to the setup process.

```shell
# Install the dev dependency
npm i --save-dev npm-watch

# add watch script to package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "watch": "npm-watch"
  }

# run the builder
npm run watch
```
