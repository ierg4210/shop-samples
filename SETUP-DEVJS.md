Setting up a Node.js project
=========================

## Initialize a node.js project
Running ```npm init``` will create a package.json file. Answer the questions interactively. Remember to use app.js as entry point, as required by beanstalk.

```
(local-dev-env) $ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (test) shopXX-ierg4210
version: (1.0.0) 1.0.0
description: IERG4210 ShopXX
entry point: (index.js) app.js
test command: 
git repository: https://github.com/ierg4210/shopXX.git
keywords: education, CUHK, ierg4210, web programming and security, assignment, ecommerce
author: adon
license: (ISC) BSD
About to write to /Users/adon/projects/ierg4210/shopXX/package.json:

{
  "name": "shopXX-ierg4210",
  "version": "0.0.1",
  "description": "IERG4210 ShopXX",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ierg4210/shopXX.git"
  },
  "keywords": [
    "education",
    "CUHK",
    "ierg4210",
    "web",
    "programming",
    "and",
    "security",
    "assignment",
    "ecommerce"
  ],
  "author": "adon",
  "license": "BSD",
  "bugs": {
    "url": "https://github.com/ierg4210/shopXX/issues"
  },
  "homepage": "https://github.com/ierg4210/shopXX"
}


Is this ok? (yes) yes
```

Create a file ```app.js``` with content like so:
```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(process.env.PORT || 8888);
```

Run locally you newly created application, literally a webserver
```
$ node app
```
To quit the app gracefully, press 'Ctrl + C'

Open your browser to visit http://localhost:8888/. Expect to see "Hello World!"
