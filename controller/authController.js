const signupGet = (req, res) =>{
    res.render('signup');
}
const signupPost = (req, res) =>{
    res.send('new signup');
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