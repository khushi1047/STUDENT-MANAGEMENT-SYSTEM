import mongoose from "mongoose";
const connectDB = async(DATABASEURL)=>{
    try{
        const res = await  mongoose.connect(DATABASEURL);
        if(res) {
            console.log("databse connected!");
        }
        else{
            console.log("databse not connected!")
        }
    }
    catch(e){
        console.log(e.message);

    }
}

export default connectDB;