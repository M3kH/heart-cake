Heart Cake
==========

A full Node.JS Isomorphic Framework with ORM integration.


## Welcome to Heart Cake

Heart-Cake is a full JavaScript MVC Framework made with the ingredients:
- A base of Node.js,
- An heart of Back-bone,
- The taste of Rendr,
- The simplicity of Knex / Bookshelf.

The goal is made a base full IsoPhormic application, with the DataLayer abstracted and stored in a DB( Postgres, MySQL, SQLite3 ).
With a final result the semplicity of describe an application and make a prototype in really few steps.

## About the structure
Here is missing the documentation but the dependency of this project are well documented so I suggest everyone wants start to use this project,
know the ingredients of him, in this way you can have more powerfull approach to hack and work.

## Dependency Links and Relateds Articles
- Rendr - https://github.com/airbnb/rendr A small bidirectional-logic server and front-end library BackBone based.
- Knex - http://knexjs.org/ This is the interface with the DB
- BookShelf - http://bookshelfjs.org/ This is the interface with the DB
  - Interesting post about the usage of BookShelf - https://github.com/tgriesser/bookshelf/issues/69
  - BookShelf an ORM for Node.JS - http://thinkingonthinking.com/Bookshelf-an-ORM-for-Node/

## Run this project
- Install Postgress / MySQL/ SQLite3
- Add your connection properties in serve/models/base.js
- npm install pg / npm install mysql / npm install sqlite
- grunt server
- GET http://localhost:3030/api/install/
- Visit http://localhost:3030/