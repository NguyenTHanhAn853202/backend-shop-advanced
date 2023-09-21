const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoughtSchema = new Schema(
    {
        userID: {type: mongoose.Schema.ObjectId, required: true},
        idProduct:{type: mongoose.Schema.ObjectId, required: true,ref:'Product'},
        size:String,
        number:Number,
        image:String,
        price:Number,
        code:{type:String,default:null},
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { 
        collection:'Bought',
        timeseries: true
    },
);

module.exports = mongoose.model('Bought', BoughtSchema);