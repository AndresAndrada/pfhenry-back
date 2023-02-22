require('dotenv').config();
const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');
const port = process.env.PORT || 3001; 

server.listen("3001", async () => {
    try {
        await sequelize.sync({ force: true, alter: true });
        console.log(`Server listening on port ${port}`);
    } catch (error) {
        console.log(error);
    };
});