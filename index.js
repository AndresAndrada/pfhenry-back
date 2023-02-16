const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');

server.listen("3001", async () => {
    try {
        await sequelize.sync({ force: false, alter: true });
        console.log('Server listening on port 3001');
    } catch (error) {
        console.log(error);
    };
});