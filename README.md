# My Social Network App

## Description:
This is an API application that can be viewed using Insomnia. <br> The Social Network Web Application can be used by users to share thouhts, react to freiend's thoughts and create a friend list. 

## Table Of Contents:
- [Installation Guide](#installation-guide)
- [Usage](#usage)
-	[License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation Guide:
Make sure that you have node/npm, as well as installed and running.<br>1- Clone this repository to your server. using gitbash.<br>2-Go to the main directory and run an<br> "npm install" <br>"npm run build"<br>"npm run seed"<br>"npm run start"<br>When the console prompts that your app is running on port 3001!, open Insomnia and follow the steps below. 

## Usage: 
When your app is running, you can test the APIs in Insomnia, as shown in the below snapshot:<br>1) Get All Users: <span>localhost:3001/api/users</span><br>2) Get All Thoughts: <span>localhost:3001/api/thoughts</span><br>3) Get Single User: <span>localhost:3001/api/users/<userID:xxxxxsample></span><br>4) Get Single Thought: <span>localhost:3001/api/thoughts/<thoughtID:xxxxsample></span><br>5) Update single user by having the following header --> <span>localhost:3001/api/users/</span> and this sample body in JSON:<br>{"username":"lemonJuice",<br>"email":"lemonJuice@example.com"}<br>6) Update single User by having this in the header --> <span>localhost:3001/api/users/<userID:xxxxxsample></span>, and this in the sample body in JSON:<br>{"username": "Maher"}<br>7) Delete User:  <span>localhost:3001/api/users/<userID:xxxxxsample></span><br>8) Create a Thougt by having this in the header -->  <span>localhost:3001/api/thoughts/</span>, and this is the sample body in JSON:<br>{"thoughtText": "I am adding this thought for a FullStack coding bootcamp experience!!!...","userName": "Olivia","userId": "673c112d85098d9b6826dc53"}<br>9) Update a single Thought by having this in the header --> <span>localhost:3001/api/thoughts/<thoughtID:xxxxsample></span>, and this is a sample body in JSON:<br>{"thoughtText": "How in the world would someone come up with a logic like this?"}<br>10) Delete a Thought <span>localhost:3001/api/thoughts/<thoughtID:xxxxsample></span><br>11) Add a Friend: <span>localhost:3001/api/users/<userID:xxxxxsample>/friends/<userID:xxxxxsample></span><br>12) Delete a Friend: <span>localhost:3001/api/users/<userID:xxxxxsample>/friends/<userID:xxxxxsample></span><br>14) Add a Thought Reaction by having this in the header: <span>localhost:3001/api/thoughts/<thoughtID:xxxxsample>/reactions/, and this is the sample body in JSON: {"responseBody":"I had no idea I could do that!!!!!!","username":"Liam"}<br>15) Delete a Thought Reaction: </span>localhost:3001/api/thoughts/<thoughtID:xxxxsample>/reactions/<reactionId:xxxxsample>

## Licence: <br>
### MIT <br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
https://opensource.org/licenses/MIT


## Contributing:
No Contributions can be made to this code!

## Tests:
In the following snapshot you can see how you can setup Insomnia to test the app:<br> There is also the following video to show you how the app runs.

## Questions:
If you have any question please contact: <br>
name: maherhosn <br>
email: maherhosn@hotmail.com
  
