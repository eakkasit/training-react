# React Training

## Require
1. Node version 16+ (https://nodejs.org/en/download/)


## Create Project (For new project)

1. run command "npx create-react-app (your project name"
2. change directory to your project name
3. run command "npm install" or "yarn"

## For clone project or exist
1. git clone project
2. run command "npm install" or "yarn"


## Run project

"npm start" or "yarn start"

## Router

"npm install react-router-dom"

## Redux
"npm install @reduxjs/toolkit react-redux"

## Deployment
- "npm install env-cmd" for run build from env file
- add basename="relative path" BrowserRoute in index.js ( ```<BrowserRouter basename="relative path">``` )
- add home_page to relative path in packgage.json (  "homepage": "/path" )
- npm run build 
- copy to server

## Note
Please check baseUrl is file App.js it's must be like backend url