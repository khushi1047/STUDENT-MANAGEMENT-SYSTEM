import express from "express" 
import dotenv from "dotenv";
import route from "./routes/route.js";
import connectDB from "./db/db.js";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

// ejs setup
app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded())

const port = process.env.PORT
const database_url=process.env.DATABASE_URL;
// database connection
connectDB(database_url)

// route use
app.use('/',route)





app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})