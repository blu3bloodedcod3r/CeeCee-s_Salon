const router = require('express').Router();
const { Appt } = require('../../models')

// When passing from browser to back end will result in 
router.post('/', async (req, res) => {
    try {
        const apptData = await Appt.create({
        date: new Date(req.body.date),
        time: new Date(`$(req.body.time) $(req.body.time}`),
        message: req.body.msg,
        service_id: parseInt(req.body.service),
        user_id: req.session.userId
    })
    res.status(200).json(apptData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;