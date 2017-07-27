# facetamvan

A simple facebook client as an example for consuming graph API facebook both from the static website and server using node.js with express.js framework.

This program consists of 2 parts, the API server, and the client side which is a simple static web apps.

## Info & Dependencies

### Client Side
The client side was built using JQuery, Bootstrap, Axios, and FB SDK JavaScript.

### Server
The server was built using framework express.js.
Here is the content of the package.json file :
```json
{
  "name": "face-tamvan-server",
  "version": "0.1.0",
  "private": false,
  "public": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.4",
    "debug": "~2.2.0",
    "dotenv": "^4.0.0",
    "express": "~4.13.4",
    "fb": "^2.0.0",
    "morgan": "~1.7.0"
  }
}
```

## File and Folder 
```bash
.
├── README.md
├── client
│   ├── assets
│   │   └── fbsdk.js
│   └── index.html
└── server
    ├── LICENSE
    ├── README.md
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    └── routes
        ├── index.js
        └── users.js
```