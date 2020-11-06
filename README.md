# Full Stack Template

## Setup
```shell
git clone https://github.com/hbracy/fullstack-javascript-template.git
cd template/frontend && npm install
cd ../backend && npm install
```
You must create a `.env` file at at `frontend/.env` and set the `REACT_APP_URL` environment variable. This corresponds to the url:port of the backend. An example of a `.env` file would be:
```REACT_APP_URL=http://localhost:3000```

## Booting
To start the backend:
`cd backend && node app.js`
To start the frontend:
`cd frontend && npm start`

To use the generator:
```shell
hygen generator buildnetworklink --name test-object --functionName testGeneratedCode --inputName inputData --outputName outputData
```
That's it!

