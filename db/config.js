import mongoose from "mongoose";

export const Connection  = ()=>{

    mongoose.set('strictQuery', false);

    const MONGODB_URL = `mongodb+srv://user:user123@mern-todo.jlncukk.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, {useNewUrlParser : true});

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected");
    })

    mongoose.connection.on('disconnected',()=>{
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error',()=>{
        console.log("There is a error in connecting to database");
    })
}

export default Connection; 
