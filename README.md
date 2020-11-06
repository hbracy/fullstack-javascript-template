# Full Stack Template

## Setup
```shell
git clone https://github.com/hbracy/template.git/
cd template/frontend && npm install
cd ../backend && npm install
```
You must set the `REACT_APP_URL` environment variable in the .env file at `frontend/.env`. This corresponds to the url:port of the backend. An example of a .env file:
`REACT_APP_URL=http://localhost:3000`

## Booting
To start the backend:
`cd backend && node app.js`
To start the frontend:
`cd frontend && npm start`

To use the generator:
```shell
hygen generator buildnetworklink --name test-object --functionName testGeneratedCode --inputName dummyData
```
That's it!

