const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    task:{
        type:String,
        required:true
    },
    complete:{
        type: Boolean,
        default: false
    }
},
{ collection: "tasks" }
);

module.exports = mongoose.model("task", taskSchema);