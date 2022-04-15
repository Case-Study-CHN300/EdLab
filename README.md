### [edlab.com](https://edlab.herokuapp.com/)
# EdLab
Built with the MERN stack (MongoDB, Express, React and NodeJS).
![EdLab Main](/client/public/main.PNG)

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  * [Author](#author)

## Introduction
This is a full stack web application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for students for online safety training for laboratories in IIT Roorkee. With this application, you can register/login, read, download different modules, attempt quizzes etc to your clients. Jump right off the [Live App](https://edlab.herokuapp.com/) or download the entire [Source code](https://github.com/Case-Study-CHN300/EdLab) and run it on your server. I'll appreciate you if can report any issue.

![EdLab Signin](/client/public/signin.PNG)

## Key Features
- Responsive and reusable UI components using ReactJS
- Authentication using jsonwebtoken (jwt) and bcryptJS
- Download resources in the form of pdf and attempt respective quizzes
- Clean admin section for displaying the scores of each student
- Authentication using jsonwebtoken (jwt) and bcryptJS


## Technologies used
This project was created using the following technologies.

#### Client

- React JS
- styled-components & react-framer-motion
- React-router-dom (To handle routing)
- Bulma & CSS Module (for User Interface)
- Axios 

#### Server

- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Follow :-

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run build
```

- create a .env file in the root directory.
- Supply the following credentials

```
DATABASE (MONGO_URI) =       
SECRET_KEY (for JWT) = 
PORT =
```
```
$ npm install (to install server-side dependencies)
$ npm start (to start the server)
```

## Comment
I intend to keep adding more features to this application, so if you like it, please give it a star, that will encourage me to 
to keep improving the project.

## Author
- Github: [@karanS1314](https://github.com/karanS1314)
- Linkedin: [@GurkaranSingh](https://www.linkedin.com/in/gurkaran-singh-8563881b5/)
- Email: [@gurkaran1314](mailto:gurkaran1314@gmail.com)
