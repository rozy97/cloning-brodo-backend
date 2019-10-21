<h1 align="center"><b>Cloning Brodo Backend</b></h1>

<p align="center">
  <img src="https://cf.shopee.co.id/file/527af9f99556ff79cb1eee9da241f96a" width="450"/>
</p>

<br/><br/>




## Related Project
express JS (https://github.com/firmansyahfachmi/Frontend-Clone-Brodo.git)

# 

MyXL Backend is a rest api application for cloning MyXL application using react-native and admin site using reactJS. Built with NodeJs using the ExpressJs Framework and NoSQL mongo Database.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)



## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name simple-rest, and Import file [rent.sql](note.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3030/notes)
8. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT=3030
HOST=localhost
USER=root // default
PASS= // default
DATABASE=simple-rest
NODE_ENV=development node server.js
```


## Contributors
<p align="center">
<table border="0">
  <tr>
    <td align="center">
      <a href="https://github.com/firmansyahfachmi">
        <img width="200" src="https://avatars1.githubusercontent.com/firmansyahfachmi" alt="M Fachmi Firmansyah"><br/>
          <sub><b>M Fachmi Firmansyah</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mahendragalih26">
        <img width="200" src="https://avatars1.githubusercontent.com/mahendragalih26" alt="Galih Mahendra W"><br/>
          <sub><b>Galih Mahendra W</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rozy97">
        <img width="200" src="https://avatars1.githubusercontent.com/rozy97" alt="Firmansyah Rozy"><br/>
          <sub><b>Firmansyah Rozy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fikribasa">
        <img width="200" src="https://avatars1.githubusercontent.com/fikribasa" alt="M. Fikri Basa"><br/>
          <sub><b>M. Fikri Basa</b></sub>
      </a>
    </td>
  </tr>
</table>
</p>

