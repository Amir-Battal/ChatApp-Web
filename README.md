  <h1 align="center">
    <br>
    <a href="https://academy.hsoub.com/learn/javascript-application-development/">
      <img src="https://avatars.githubusercontent.com/u/12829424?s=200&v=4" alt="أكاديمية حسوب" width="200">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="200">
    </a>
    <br>
    Chat Web Application
    <br>
  </h1>
  
  <h3>Real-time chat web application</h3>
  
  <h4 align="center">This project is related to the JavaScript Application development course from <a href="https://academy.hsoub.com/learn/javascript-application-development/" target="_blank">Hsoub Academy</a>.</h4>


<div align="center">
  
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
</div>
  
  <p align="center">
    <a href="#key-features">Key Features</a> •
    <a href="#download">Download</a> •
    <a href="#install">Install</a> •
    <a href="#credits">Credits</a> •
    <a href="#license">License</a>
  </p>
  
  <div align="center">
    
  ![Main](https://github.com/user-attachments/assets/b7bdadb7-9cb7-4fd7-b9bc-37745698447d)
  </div>
  
  ## Key Features
  
  * At first there are two pages to log in or create a new account.
  <div align="center">
    
  ![LoginSignUp](https://github.com/user-attachments/assets/276c8511-cf26-4bca-ab2a-a24230145b70)
  </div>

  * The home page consists of two sections:
    * Right section:
      * In the upper section on the right is the user's photo and on the left is a button to show profile.
      * The profile consists of:
        * a user picture that can be changed by clicking on it.
        * At the bottom there is a field for the user name that can be changed.
        * At the bottom there is a field for the user’s status.
        * At the end there is a button to save the changes.
      * At the bottom of the previous section there is a field to search for a specific username.
      * At the bottom of the previous section there is a list of users.
        * The user's photo, the last message sent between the two parties, and the date of this message are displayed.
        * When you click on any user you can talk to him.
        * A green dot appears next to the online user's photo.
    <div align="center">
    
    ![Right Section](https://github.com/user-attachments/assets/9c257a05-9f6c-4e67-aba6-b9a00d1f3b4a)
    </div>
          
    * Left section:
      * In the upper section:
        * the user's photo and name appear, in addition to the time of his last appearance in the right section.
        * In the families section, a small menu appears containing a button to go to the password change menu and another button to log out.
      * Below the previous section is the messages section where the messages of the sender and receiver appear, each one on its own side, and each message has a sending date.
      * At the end there is a field to write and send the message.

    <div align="center">
    
    ![Left Section](https://github.com/user-attachments/assets/ed13bf60-5a7a-4a74-a6f2-ca74e48a9951)
    </div>

## Run Locally

Clone the project
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
  git clone https://github.com/Amir-Battal/mern-order-app-frontend.git
```

### Client Side // Frontend
Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

To run this project, you will need to add the following environment variables to your .env file

General Variable
`VNODE_PATH`

WebSocket Variables
`REACT_APP_SOCKET`

Example
```bash
NODE_PATH=src/
REACT_APP_SOCKET=ws://localhost:3001
```

Start the app

```bash
  npm start
```

### Server Side // Backend
Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

To run this project, you will need to add the following environment variables to your .env file

General Variable
`PORT`

MongoDb Variables
`DB_URL`

JWT Variables
`JWT_SECRET`

Example
```bash
PORT=3001
DB_URL=mongodb://localhost:27017/chat
JWT_SECRET=jwt-secret
```

Start the app

```bash
  nodemon start
```
