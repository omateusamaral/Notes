<h1 align="center"> Notes ✍ </h1>

An application for notes what you want. the project not yet finished

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Linkedin" src="https://img.shields.io/github/followers/mateusamarall?style=social" />
</p>

## 🎯 Starting

Clone this repository with

```
git clone https://github.com/mateusamarall/Notes.git
```

Open in your terminal and use. You'll need to have yarn already installed in your computer

```
yarn dev
```

# ✔ TESTS WITH JEST 

![testes](https://user-images.githubusercontent.com/37390930/82394682-0e6ee100-9a20-11ea-8ff7-96938fc733e0.PNG)

if you want see the tests, please follow this steps:
```
1º - open the project in your code editor 
2º - go to src->config-> and opend database.js there change the "database:'notes'" to "process.env.DB_NAME"  
3º - now just run:  yarn test
```

PS: was my first test created until now, tips are welcome.

<h3>The good news</h3> <p>is the data I passed  manually worked as you can see above.</p>

 <h3>the bad news</h3>
As you already know, was my first test and I had a problem let's explain:
<br/>
<p>when you run for the first time <b>yarn test</b> the script will run and create the database, and this database does not "clean" automatically, so if you run again will show some-problems because the datas was already created before. I've searching for solve this issue but unfortunately I not find yet, if you know how to solve <a href="https://github.com/mateusamarall/Notes/issues"> Contributions</a> are welcome and I'll still working for solve this. the second "problem" is about the creating fakes users, I had a problem using so I decided not use it, until find a way to solve.</p>

# Front-end 🛠
![giphy](https://user-images.githubusercontent.com/37390930/82495456-80e3cd80-9ac1-11ea-8a6e-306ab5d3b3ff.gif)

![giphy (1)](https://user-images.githubusercontent.com/37390930/82509235-a67ed000-9add-11ea-8309-72d8597e61c9.gif)



## developed with

- [Node](https://nodejs.org/en/) - NodeJS for Interpret the code.
- [MYSQL](https://www.mysql.com/) - The database.
- [SEQUELIZE](https://sequelize.org/) - Sequelize for connect to database.

## 🤝 Contributions

Contributions, issues and feature requests are welcome!
Feel free to check [issues page](https://github.com/mateusamarall/Notes/issues).

## Contributors

<img src="https://user-images.githubusercontent.com/37390930/81833478-27562e80-9516-11ea-82a8-f9c38380f35c.png" width="150px;"/><br /><sub><b><a href="https://github.com/mateusamarall">Mateus Amaral</a></b></sub>

## Author

👤 **Mateus Amaral**

Website: https://www.gitshowcase.com/dashboard <br/>
Github: [@mateusAmaral](https://github.com/mateusamarall) <br/>
LinkedIn: [@mateusAmaral](https://www.linkedin.com/in/mateus-passos-amaral/)

## 📝 License

This project is MIT licensed - for more details [LICENSE.md](LICENSE.md)
