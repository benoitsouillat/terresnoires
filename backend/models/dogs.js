const mongoose = require("mongoose");

const dogSchema = mongoose.Schema({

    name: {type:String, required:true},
    birth:{type:String, required: true},
    breeder:{type:String, required: true},
    breed:{type:String, required: true},
    imageUrl:{type:String, required: true},

});

module.exports = mongoose.model("Dog", dogSchema);