# UserCtrl

Realtime Amplify/React/Redux application that supports CRUD queries using AppSync with DynamoDB and Lambda data sources.

Responsive for tablets and desktops.

[Demo - Hosted on S3](http://buildops-challenge-20200316093903-hostingbucket-dev.s3-website-us-west-2.amazonaws.com/dashboard)


#### Model Relationships

Employee (1 to \*) Address<br />
Employee (\* to \*) Skill


## Setup

Install the CLI (Needs at least v8.x Node.js and v5.x npm):

`npm install -g @aws-amplify/cli`

`amplify configure`

Clone project and run the following in the project directory:

`npm install`

`amplify init`

`amplify push`


## Run

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Deploy

`amplify publish`


## Test

`npm test`

Launches the test runner in the interactive watch mode.


## Clean up AWS resources

`amplify delete`


## TODO

- [ ] Testing all the functions
- [x] proper cascade delete on connected items
