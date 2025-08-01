import { text } from "express";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{type: text, required: true},
    completed:{type: Boolean, default: false},
})

const taskSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String},
    status:{type: String, enum:['Pending','In Progress', 'Completed'], default:"Pending"},
    priority:{type: String, enum:['Low','Medium', 'High'], default:"Medium"},
    dueDate:{type: Date, required: true},
     assignedTo : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
     createdBy : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
     attachments: {type: [String]},
     todoCheckList : [todoSchema],
     progress: {type: Number, default: 0}

},{
    timestamps: true
});
const Task = mongoose.model('Task', taskSchema)
export default Task