# Bookmark Manager

A better way to manage bookmarks

### How to run the project

- Install and run a MongoDB instance locally or on MongoDB Atlas
- Create a _.env_ file and add the following variables:
  - PORT (port on which you want to run the app)
  - MONGOURI (url of mongodb instance. Eg: _mongodb://127.0.0.1:27017_)
  - JWT*SECRET (any string to use as secret to sign the token. Eg: \_SECRET*)
  - JWT*EXPIRY (time in seconds post which the token will expire. Eg: \_1000*)
- Run `npm i` to install dependencies
- Run `npm run dev` to run the dev server
