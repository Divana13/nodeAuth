const User = require('../models/User');

// Handle Errors
const handleErrors = (err) =>{
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    // validate Dubplicate
    if(err.code === 11000){
        errors.email = "The email already exist";
        return errors;
    }

    // Validate Errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

const signupGet = (req, res) =>{
    res.render('signup');
}
const signupPost = async (req, res) =>{
    const {email, password} = req.body;

    try {

        const user = await User.create({email, password});
        res.status(201).json(user);

    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }

}
const loginGet = (req, res) =>{
    res.render('login');
}
const loginPost = (req, res) =>{
    res.send('user login');
}

module.exports = {
    signupGet, signupPost, loginGet, loginPost
}