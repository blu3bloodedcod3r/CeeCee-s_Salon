// create router
const router = require('express').Router();
const { User } = require('../../models');

// login user ('/api/users/login')
router.post('/login', async (req, res) => {
  try {
    console.log('******', req.body);
    // retrieve user from db based on email
    const userData = await User.findOne({
      where: {email: req.body.email}
    });
    console.log('userData', userData)
    // exit if no user found
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again'});
    }

    // if user exists check password by comparing the pd in the user model and password passed from the body
    const validPassword = userData.checkPassword(req.body.password);
    console.log('validPassword', validPassword)
    if (!validPassword) {
        return res.status(400).json({ message: 'Incorrect email or password, please try again'});
    }

    // if above passes then I can create a session and send a response back.
    req.session.save(() => {
        // declare session variables you can use in other templates so you can give access to the user to certain pages and information
        req.session.userId = userData.id;
        req.session.email = userData.email;
        req.session.loggedIn = true;

        // send response to client
        res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;