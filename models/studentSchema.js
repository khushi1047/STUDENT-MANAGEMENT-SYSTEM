import mongoose from "mongoose";

// schema(schema class)
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,  //means we cant leave it blank
    },
    email:{
        type:String,
        requied:true,
    },
    city:{
        type:String,
        requied:true,
    },
    contact:{
        type:String,
        requied:true,
    },
})

// model(Student =  model class)
const Student = mongoose.model("Student",studentSchema);
export default Student;