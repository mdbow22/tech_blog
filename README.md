# Tech Blog

## Description

A lightweight blogging platform designed for multiple users/post authors, utilizing Node, mySQL, sequelize (ORM), Express, and handlebars. The platform allows for plain-text posts and comments, sign-up/login, and password hashing for added security.

## Installation

After forking the git repo, install all dependencies by running:

    npm install

Afterwords, you will need to configure a .env file with your database information. An example is given below:

    DB_NAME=database_db
    DB_USER=root
    DB_PASSWORD=somePassword1

This information is utilized by config/connection.js to set up the database connection in Sequelize using MySQL.

## Usage

Users are initially sent to a homepage giving them the option to login or signup:

[insert screenshot here]

If they already have an account, they can login at the respective page:

[insert screenshot here]

Once logged in, the homepage will show them all of the current posts:

[insert screenshot]

Clicking on a post will send them to the post's page, with comments, and the ability to add a comment:

[insert screenshot]

They can also go to their dashboard to see all of their posts and create a new one:

[insert screenshot]

Clicking on a post will open the editor where they can modify it or delete it:

[insert screenshot]

Note: the create post button opens a similar view, but without a delete option.

## Questions

Please send any questions through github as an issue on the repo.

## Demo

A live working demo is available here: https://blooming-sea-91213.herokuapp.com/