import mongoose from "mongoose";

const {Schema} = mongoose

const  UserSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    email : {
        type : Schema.Types.String,
        required : true
    },
    password : {
        type : Schema.Types.String,
        required : true
    },
    phone : {
        type : Schema.Types.Number,
        required : true
    }
})

const User = mongoose.model("User" , UserSchema)


export default User




