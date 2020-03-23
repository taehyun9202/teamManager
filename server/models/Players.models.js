const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required : [true, "First Name is required."]
    },
    lastName:{
        type: String,
        required : [true, "Last Name is required."]
    },
    position:{
        type: String,
        required : [true, "Position is required."]
    },
    age:{
        type: Number,
        required : [true, "Age is required"],
        min: [18, "Must be older than 18 to join."]
    }
})

module.exports = mongoose.model("Player", PlayerSchema);