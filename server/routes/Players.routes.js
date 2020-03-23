const Players = require("../controllers/Players.controller");

module.exports = app => {
    app.get('/api/players', Players.getAll);
    app.post('/api/players', Players.create);
    app.get('/api/players/:_id', Players.getOne);
    app.delete('/api/players/:_id', Players.delete);
    app.put('/api/players/:_id', Players.update);
}