const router = require('express').Router();
const { Services, User, Appt } = require('../models')

// Admin enter ('api/admin')
router.get('/', async (req, res) => {
    try {
      const apptData = await Appt.findAll()
      const appts = apptData.map((data) => data.get({plain: true}))
      console.log(appts)
      res.render('admin', { appts, loggedIn: req.session.loggedIn })
  
    } catch (err) {
        console.log("Error");
        res.status(500).json(err);
      }
  });
  
// Enter modify services page ('api/admin/services')
  router.get('/services', async (req, res) => {
    try {
      const allService = await Services.findAll({
      })
      const services = allService.map((data) => data.get({ plain:true }));
      res.render('services', { services, loggedIn: req.session.loggedIn })
    } catch (err) {
      console.log("Error");
      res.status(500).json.apply(err);
    }
  });

// create new service ('/api/admin/services')
router.post('/services', async (req, res) => {
    try {
      console.log('****',req.body)
      console.log('~~~', req.session)
      const newService = await Services.create({
        ...req.body,
      //   title: req.body.title,
      //   content: req.body.content,
        user_id: req.session.userId,
      });
  
      res.status(200).json(newService);
      // res.render('dashboard', { loggedIn: res.session.loggedIn })
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Delete existing Service (`/admin/services`)
router.delete('/services', async (req, res) => {
  try {
    console.log(req.body)
    const serviceData = await Services.destroy({
      where: {
        id: req.body.id,
      },
    });
  
    if (!serviceData) {
      res.status(404).json({ message: 'No service found with this id!' });
      return;
    }
  
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router