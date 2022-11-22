const router = require('express').Router();

router.post('/', async (req, res) => {
    try{
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
    });

    req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(newUser);
    });
    
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})