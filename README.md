# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
# ready to use
this web app is deployed on heroku https://movies-app11.herokuapp.com/




# Set-Up
### Steps to set up development environment variables and deployment
- create .env.development and .env.production files in the root directory 
- define environment variable "REACT_APP_API_URL" in the above files ex: ```` REACT_APP_API_URL = "http://localhost:3000/api" ````
- basically above variable contain backend api server url 
- build the project before deploying ````npm run build````
- install serve ````sudo npm i -g serve````
- test build code ````serve -s build````
- heroku buildpack for react app ````heroku create $APP_NAME --buildpack mars/create-react-app````   
- display saved custom variables on remote server by typing ex: $ ````heroku config````
- display saved custom variables on local server by typing ex: $```` export````





