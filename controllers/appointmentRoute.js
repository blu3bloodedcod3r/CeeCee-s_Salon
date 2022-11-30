const router = require('express').Router();
const Services = require('../models/Services')
const AppointmentPicker = require('appointment-picker');
const pickerCSS = require('../node_modules/appointment-picker')

router.get('/', async (req, res) => {
    return res.render('bookappointment')
})

var picker = function () {
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
    templateInner: '<li class="appo-picker-list-item {{enabled}}"><input type="button" tabindex="-1" value="{{time}}" {{enabled}}></li>',
    templateOuter: '<span class="appo-picker-title">{{title}}</span><ul class="appo-picker-list">{{innerHtml}}</ul>',
    }); 
};

AppointmentPicker.onload = function() {
        $.fn.appointmentPicker = function(options) {
            this.appointmentPicker = new AppointmentPicker(this[0], options);
            return this;
        }
    };

const getTime = function() {
        $picker.appointmentPicker.getTime();
    };

    console.log(picker);
    console.log(getTime)

module.exports = router