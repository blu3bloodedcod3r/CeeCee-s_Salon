const router = require('express').Router();
const { Appt } = require('../../models')

router.post('/', async (req, res) => {
    // Request the body object
    console.log('req.body', req.body)
    console.log(req.session)
    try {
        const apptData = await Appt.create({
        date: new Date(req.body.date),
        time: new Date(`${req.body.date} ${req.body.time}`),
        message: req.body.msg,
        service_id: parseInt(req.body.service), // column requires a INT. The data is received as a string. Convert to INT using parseInt
        user_id: req.session.userId
        // Not all columns must be listed. Only the ones that can't be null
    })
    console.log(apptData)
    res.status(200).json(apptData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;