# pi_sockets
Testing Socket.io on the Raspberry Pi

## Install

```shell
cd client
npm install

cd ../server
npm install
```

## Usage

The express server is setup to use the build directory for create-react-app.

Run `npm run build` to update the client.

To start the app:

```shell
cd server
nodemon index.js
```

visit [localhost:3000](http://localhost:3000) in the browser
