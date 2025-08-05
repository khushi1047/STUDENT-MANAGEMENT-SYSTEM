import express from "express" 
import dotenv from "dotenv";
import route from "./routes/route.js";
import connectDB from "./db/db.js";


dotenv.config();
const app = express();


app.use('/',route)

const port = process.env.PORT
const database_url=process.env.DATABASE_URL;
connectDB(database_url)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})