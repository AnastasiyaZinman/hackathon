const Sequelize = require('sequelize');

const DB_URI = process.env.CONNECTION_STRING ||
'mysql://sql7263384:Xk2zWnZKCL@sql7.freesqldatabase.com:3306/sql7263384';
const sequelize = new Sequelize(DB_URI);

sequelize
    .authenticate()
    .then(() => { console.log('Connection has been established successfully.'); })
    .catch(err => { console.error('Unable to connect to the database:', err); });

module.exports = sequelize;
