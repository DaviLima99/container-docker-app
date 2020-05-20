
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/DaviLima99/container-docker-app">
    <img src=".github/logo.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center"> Docker App Challenge </h3>

  <p align="center">
    <br />
    <br />
    <a href="https://github.com/DaviLima99/container-docker-app">View Demo</a>
    ·
    <a href="https://github.com/DaviLima99/container-docker-app/issues">container-docker-apprt Bug</a>
    ·
    <a href="https://github.com/DaviLima99/container-docker-app/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

This challenge was made by the distributed systems teacher. 
**We need to separate the applications using docking containers**


### Built With

* [React.js](https://pt-br.reactjs.org/) - Build web app with React
* [Bootstrap](https://getbootstrap.com/) - Bootstrap 4 for css styles
* [Axios](https://github.com/axios/axios/) - Promise based HTTP client for the browser and node.js
* [Express](https://expressjs.com/pt-br/) - Framework web app Node.js
* [Knex](http://knexjs.org/) - A SQL Query Builder for Javascript


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* MySQL
* NPM
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the container-docker-app
```sh
git clone https://github.com/DaviLima99/container-docker-app
```
2. Install NPM packages frontend
```sh
$ cd container-docker-app/frontend
$ npm install
```
3. Install NPM packages backend
```sh
$ cd container-docker-app/api
$ npm install
```


### Build Images

```sh
docker build -t mysql-image -f api/db/Dockerfile .
```

```sh
docker build -t node-image -f api/Dockerfile .
```

```sh
docker build -t frontend-image -f frontend/Dockerfile .
```

### Run containers

```sh
docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```

```sh
docker run -d -v $(pwd)/api:/home/node/app -p 3333:3333 --link mysql-container --rm --name node-container node-image
```

```sh
docker run -p 3001:3000 --link node-container --rm --name frontend-container frontend-image
```


### Execute SQL script
```sh
docker exec -i mysql-container mysql -uroot -p123456789 < api/db/scripts.sql
```



### Bash MySql container
```sh
docker exec -it mysql-container /bin/bash
```




<!-- CONTACT -->
## Contact

* Davi Lima - [davi.n.lima99@gmail.com]
* Erick Nemet - [erick.nemet@gmail.com]

Project Link: [https://github.com/DaviLima99/container-docker-app](https://github.com/DaviLima99/container-docker-app)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DaviLima99/container-docker-app.svg?style=flat-square
[contributors-url]: https://github.com/DaviLima99/container-docker-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DaviLima99/container-docker-app.svg?style=flat-square
[forks-url]: https://github.com/DaviLima99/container-docker-app/network/members
[stars-shield]: https://img.shields.io/github/stars/DaviLima99/container-docker-app.svg?style=flat-square
[stars-url]: https://github.com/DaviLima99/container-docker-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/DaviLima99/container-docker-app.svg?style=flat-square
[issues-url]: https://github.com/DaviLima99/container-docker-app/issues
[license-shield]: https://img.shields.io/github/license/DaviLima99/container-docker-app.svg?style=flat-square
[license-url]: https://github.com/DaviLima99/container-docker-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/davilima99/
[product-screenshot]: .github/screenshot.png