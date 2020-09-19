const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String
});  

const student = mongoose.model("student", studentSchema);

//export
module.exports = student;