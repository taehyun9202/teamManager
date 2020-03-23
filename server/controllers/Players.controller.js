const Player = require("../models/Players.models");

class PlayerController{
    getAll(req, res){
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json(err));
    }
    
    create(req, res){
        const newPlayer = new Player(req.body);
        newPlayer.save()
        .then(()=> res.json({msg: "Player added"}))
        .catch(err => res.json(err));
    }

    delete(req, res){
        Player.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "Deleted "}))
            .catch(err => res.json(err));
    }

    getOne(req, res){
        Player.findOne({_id: req.params._id})
            .then(player => res.json(player))
            .catch(err => res.json(err));
    }
    
    update(req, res){
        Player.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({msg: "Updated "}))
            .catch(err => res.json(err));
    }
}

module.exports = new PlayerController();