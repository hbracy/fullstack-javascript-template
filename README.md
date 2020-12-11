# Full Stack Template

## Summary
This template has everything you need to build a full stack application using only Javascript. Includes:
* Full stack networking generator to build APIs in seconds
* MongoDB
* React/Redux
* Test cases
* MaterialUI
* Turnkey setup

## Setup
```shell
git clone https://github.com/hbracy/fullstack-javascript-template.git
cd template/frontend && npm install
cd ../backend && npm install
```
You must create a `.env` file at `frontend/.env` and set the `REACT_APP_URL` environment variable. This corresponds to the url:port of the backend. An example of a `.env` file would be:
```REACT_APP_URL=http://localhost:3000```

You must also create a `.env` file at `backend/.env` and set the `JWT_SECRET` environment variable. This is a secret for cookied verification tokens. An example of a `.env` file would be:
```JWT_SECRET=Qk3vH7isQQVgdbB1qBrMeFEIgmTFp8Ysp1EircEgcTG+kuQfg8nD//W5T3xy70WbyzntjidCtco99z1MJMAjTVUta1pyuf47moEAxYYS4LptNqf0YuZJQL353GGOirrZhOQfVaOP6h5d0m+qfZUFauqD8aQrDgGrnXHmVwOj9/PjQLsyf9B8ZMcSVbABq0TTBC9+H52o35fO6y6BU/HZVNPKV+uhjToo4//37Q```

You must also ensure you have MongoDB installed and running at the url `mongodb://localhost/title`. Once you do, go to `backend/database/core-db.js` and change `'template'` with your db name here: 
```js
connection = db.db('template');
```

## Booting
To start the backend:
`cd backend && node app.js`
To start the frontend:
`cd frontend && npm start`

To use the generator:
```shell
hygen generator buildnetworklink --name test-object --functionName testGeneratedCode --inputName inputData --outputName outputData
```

## Deployment
To deploy your app:
* Make sure you have a Digital Ocean account and droplet. If not, sign up at Digital Ocean and buy a droplet ($5 a month).
* Buy your domain (eg GoDaddy, Domains.com).
* Enter the following nameservers where your domain provider manages DNS:
```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```
* In Digital Ocean go to Networking > Domains > Enter domain > Enter your new domain name.
* Digital Ocean should take you to the Create New Record page for your new domain. If not, just click on the new domain.
* Go to A > Hostname and enter `@`. Then in Will Direct To, choose or enter the Digital Ocean droplet IP that you want your domain to direct to. Create Record.
* Go to A > Hostname and enter `www`. Then in Will Direct To, choose or enter the Digital Ocean droplet IP that you want your domain to direct to. Create Record.
* Ensure your git is up to date.
* SSH into your Digital Ocean Droplet with `ssh root@<digitaloceandropletIP>`. Give your droplet password.
* Make sure your droplet is set up: 
```shell
sudo apt update
sudo apt install npm
sudo npm install -g pm2
pm2 startup ubuntu
sudo apt install nginx
systemctl status nginx
```
* Follow the instructions above in the *Setup* section
* Build the frontend with `frontend && npm run-script build`
* Setup Nginx by:
	* Changing the line that begins with `user` in `/etc/nginx/nginx.conf` to `user root`
	* Remove default sites-available: `rm -rf /etc/nginx/sites-available/default`
	* Creating a sites-available: `nano /etc/nginx/sites-available/<domain>` With the following content:
		```
		server {
		   server_name <domain> www.<domain>;
		   location / {
		        alias /root/<projectdir>/frontend/build/;
		   }
		   location /backend/ {
		         proxy_pass http://localhost:3000/;
		         proxy_set_header Host $host;
		         proxy_set_header Upgrade $http_upgrade;
		         proxy_set_header Connection 'upgrade';
		         proxy_http_version 1.1;
		         proxy_cache_bypass $http_upgrade;
		    }
		}
		```
	* Enable the sites-available file by symlinking it with sites-enabled: `sudo ln -s /etc/nginx/sites-available/<domain> /etc/nginx/sites-enabled`
	* Restart nginx with `sudo systemctl restart nginx`
* Add SSL by following the instructions [here](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04). Note that the instructions are a little outdated and that you want to use `sudo apt install python3-certbot-nginx` instead of `sudo apt install python-certbot-nginx`
A great tutorial for the above is [here](https://dev.to/zeeshanhshaheen/how-to-deploy-react-js-and-nodejs-app-on-a-single-digitalocean-droplet-using-nginx-1pcl)

To edit your deployed app, just:
* Make your edits locally.
* Push to git.
* Log into your droplet.
* Pull your update from git.
* `cd frontend && npm install && npm run-script build && cd ../backend && npm install && pm2 restart app.js`
* Note that if you are changing your `.env` file for the frontend, `npm run-script build` won't be sufficient. You'll need to follow the directions at the end of that command output to reload the .env file.


That's it!

