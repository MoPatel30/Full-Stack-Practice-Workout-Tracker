const mongoose = require("mongoose")

const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3 
    }

},
    
    {
        timestamps: true
    }
)

const User = mongoose.model("users", userSchema)
module.exports = User
