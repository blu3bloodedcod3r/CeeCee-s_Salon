// create router
const router = require('express').Router();
const { User } = require('../../models');

// signup user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log('req.body', req.body)
    console.log(userData)
    console.log('req.session', req.session)

    req.session.save(() => {
      req.session.userId = userData.dataValues.id;
      req.session.email = userData.dataValues.email;
      req.session.loggedIn = true;
      
      console.log('atcreate LoggedIn', req.session.loggedIn)
      return res.status(200).json(userData);
      
    });
  } catch (err) {
      return res.status(400).json(err);
  
  }
});

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
      return res.status(400).json({ message: 'Incorrect "email" or password, please try again'});
    }

    // if user exists check password by comparing the pd in the user model and password passed from the body
    const validPassword = userData.checkPassword(req.body.password);
    console.log('validPassword', validPassword)
    if (!validPassword) {
        return res.status(400).json({ message: 'Incorrect email or "password", please try again'});
    }

    // if above passes then I can create a session and send a response back.
    console.log('I am before req.session')
    console.log('req.session ***', req.session)
    req.session.save(() => {
        // declare session variables you can use in other templates so you can give access to the user to certain pages and information
        req.session.userId = userData.dataValues.id;
        req.session.email = userData.dataValues.email;
        req.session.loggedIn = true;

        console.log('req.session after login', req.session)
        // send response to client
        return res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err)
    return res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
});

module.exports = router;