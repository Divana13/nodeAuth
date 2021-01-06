const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [(val)=>{}, "Please fill in the valid email"]
    },
    password:{
        type: String,
        require: [true, "please enter an password"],
        minlength: [6, "the minimus password is 6 charactors"]
    }
});

// Fire function before save doc to database
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;