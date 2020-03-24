const Players = require("../controllers/Players.controller");
const Users = require("../controllers/Users.controller");
const { authenticate } = require("../config/jwt");

module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login",  Users.login);

    app.get('/api/players', authenticate, Players.getAll);
    app.post('/api/players', authenticate, Players.create);
    app.get('/api/players/:_id', authenticate, Players.getOne);
    app.delete('/api/players/:_id', authenticate, Players.delete);
    app.put('/api/players/:_id', authenticate, Players.update);
}