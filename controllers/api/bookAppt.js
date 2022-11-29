const router = require('express').Router();
const Services = require('../../models/Services')
const AppointmentPicker = require('appointment-picker');
import '../node_modules/appointment-picker/css/appointment-picker.css';

router.get('/bookAppt/', async (req, res) => {
    try{
        const selectService = await Services.findAll({
            id: req.params.id,
            name: req.params.name,
            price: req.params.price,
            duration: req.params.duration
    });
        res.render('/', {Services})    

    if (selectService) {

        res.render('/bookAppt', {Appt})
    }
    console.log(selectService);
    res.status(200).json(selectService);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

$.fn.appointmentPicker = function(options) {
    this.appointmentPicker = new AppointmentPicker(this[0], options);
    return this;
  };

  $('#time-1').appointmentPicker({
    interval: 60,
    mode: '12h',
    minTime: 09,
    maxTime: 19,
    startTime: 09,
    endTime: 19,
    disabled: ['16:30', '17:00'],
    allowReset: true,
    title: Services.selectService,
    templateInner: '<li class="appo-picker-list-item {{disabled}}"><input type="button" tabindex="-1" value="{{time}}" {{enabled}}></li>',
    templateOuter: '<span class="appo-picker-title">{{title}}</span><ul class="appo-picker-list">{{innerHtml}}</ul>',

}); 

$picker.appointmentPicker.getTime();

console.log(picker);

module.exports = router