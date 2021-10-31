const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const models = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = exphbs.create({ helpers });

//Create sessions for users
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
  };

app.use(session(sess));

//Set handlebars as view engine for front-end
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

//middleware to parse JSON and URL info on requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware for front-end environment
app.use(express.static(path.join(__dirname, 'public')));

//Link in all the routes
app.use(routes);

//Sync database to models and start server on the port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });