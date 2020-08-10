[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# iliveyou.github.io

### Requirements

- [Node.js](https://nodejs.org/en/download/package-manager/#nvm)
- [mkcert](https://github.com/FiloSottile/mkcert) (only for develop installation)

### Installation

1\) Clone Git repository:

```sh
$ git clone git@github.com:iliveyou/iliveyou.github.io.git
$ cd iliveyou.github.io
```

2\) Copy and rename these files: 

```
.gitconfig.dist -> .gitconfig
```

and edit them according to your needs.

3\) Run this command:

```sh
$ git config --local include.path ../.gitconfig
```

4\) Create local CA with mkcert: 

```sh
$ mkcert -install
```

5\) Create SSL certs:

```sh
$ mkcert -cert-file certs/server.crt -key-file certs/server.key localhost
```

6\) Install Node.js dependencies:

```sh
$ npm i
```

7\) Run Webpack Dev Server:

```sh
$ npm run start
```

8\) Browse to the following address https://localhost:8080.

### Webpack tasks

- Build sources: 

```sh
$ npm run build
```

- Start file watcher for recompiling: 

```sh
$ npm run watch
```

- Start Webpack Dev Server: 

```sh
$ npm run start
```

- Build sources for production: 

```sh
$ npm run production
```

### Contributing

For your contributions please use the [git-flow workflow](https://danielkummer.github.io/git-flow-cheatsheet/).

### Changelog

See auto-[CHANGELOG](CHANGELOG.md) file.

### Credits

© Copyright 2020 [I Live You](https://ilive.you) All rights reserved.  
License MIT, see [LICENSE](LICENSE) file.
