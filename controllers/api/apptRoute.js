const router = require('express').Router();

// When passing from browser to back end will result in 
router.post('/', async (req, res) => {
    try {
        const apptData = await Appt.create({
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    })
    res.status(200).json(apptData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;