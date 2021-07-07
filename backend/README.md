### Hi there, I'm [OguzzSancaktar][website] 👋

[![Website](https://img.shields.io/website?label=oguzsancaktar.com&style=for-the-badge&url=https%3A%2F%2Foguzsancaktar.com)](https://oguzsancaktar.com)
[![Instagram Follow](https://img.shields.io/github/followers/oguzzsancaktar?color=f2f200&label=oguzzsancaktar&style=for-the-badge)](https://instagram.com/oguzzsancaktar)


# SEO BLOG FullStack Project

- Hello , Everyone !
- I improved myself on frontend development, pepols things frontend developer makes web design or websites. I thought its not true Frontend developer does'nt have to need good vision... 
- If you want to be a good frontend developer you need to know backend and network...

- I started this project because of learning 'SEO' and backend with node.js (express).
- I have similarity with databaases but I cant say I know it right now. I want to say I'm ezpert about database systems when I fnished this project.

- I will share my experiences and many informations about this project here..

## Part 1 ( Initilasing the project.. )

- First thing first you need to create your project folders. 
- We will study like FullStack so we need to "Backend" and "Frontend" Folders.
- I started to create Server.js for node.js server. 

```
npm init -y
```

- For Saving our project on cloud I will use github. So need to say npm init -y in our backend folder. This will give us package.json file. "-y" is gives us the default package.json file. If you want to configure it you need to say just "npm init"

## Part 2 (creating server.js file)
- Go your backend folder directory and use terminal with npm,

```
npm i express mongoose body-parser cookie-parser morgan nodemon dotenv cors
```

- This command will download theese libraryes to your backend folder in node_modules.

- The node_modules is for development project so you need to update this folder anywhere.

- If you want to reinstall or install your project just say in your project directory.

```
npm install
```

- When you run this command your node_modules folder will comes where you want..
- Node_modules folder is be 200 - 300 mb that is big area. So we need to configure our uploading github files.

```
touch .gitignore
```

- This command make for you to '.gitihnore' file this file is configure uploading for your github.
- Need to write node_modules in .gitignore file. When you do that if you try to upload files or update your files to your cloud node_modules folder wont upload your cloud.

## Part 3 (DATABASE)
- I will use mongoDB for database so I install my folder mongoose. Just create new cluster on mongoDB atlas and use it in your server.js. 

- I wont explain this thing you can find documantation.

- I weill use mongoDB locally so I install 'ROBO3T'.


## PART 4

- After we ded post methot to signup, we need to save user to database.
```
npm i express-validator jsonwebtoken express-jwt formidable lodash slugify string-strip-html
```

```
npm i shortid
```


## Creating Server.js and Registering with secret page

- After creating server.js ve need to configure this file.

- When we start to configure server.js file firstly need to import few things. Thats are 
express morgan bodyparser cookie parser cors mongoose dotenv 

### Express

- what is the expressjs ? 
- Express.js is a framework of Node.js which means that most of the code is already written for programmers to work with. You can build a single page, multi-page, or hybrid web applications using Express.js. Express.js is lightweight and helps to organize web applications on the server-side into a more organized MVC architecture.


### Body Parser 
- body parser is express middleware

- You need to use bodyParser() if you want the form data to be available in req.body
- we can use body parser like this;

```javascript
app.use(bodyParser.json());
```

### Cookie Parser 

- cookie parser is express middleware

### Cors 
- CORS is like security protocol... Browser dont permission top outside link for user security. If you try to post or get any request from the outside you will take cross origin error. 

- Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin. This is useful because, thanks to the same-origin policy followed by XMLHttpRequest and fetch, JavaScript can only make calls to URLs that live on the same origin as the location where the script is running. For example, if a JavaScript app wishes to make an AJAX call to an API running on a different domain, it would be blocked from doing so thanks to the same-origin policy.

### dot env

- We are using variables our code, when we are usin variable we need to define it.
We can define variables in javascript with three keyword these are "let const var" 
I dont want to explain that keywords you can find many information with googleing :d 
- CONST is different it come as closest time. We can define Global constants variables with ".env" file. 
- If you create .env file and you want to use this variables in your project you need te use dotenv

```javascript
process.env.VARIABLE_NAME
```


### Loadash 

- What is the loadash ? 
- Lodash is a JavaScript utility library. Simply put, it is a list of 100+ JavaScript functions that other people already wrote that you can import into your current project and use to solve common coding headaches.



## After configure server js 

- first thing first we need to create app constant from express
```javascript
const app = express()
```

- after this add middlevares to app
```javascript
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser.json())
```









### Connect with me:

[<img align="left" alt="oguzsancaktar.com" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="oğuztahasancaktar | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="oguzsancaktar | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]

<br />
