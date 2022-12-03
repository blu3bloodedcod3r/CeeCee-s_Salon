// Reference: 11-Express > 17-Ins_POST-Fetch, 21_Ins_Modular-Routing
// const AppointmentPicker = require('appointment-picker')
// import AppointmentPicker from 'appointment-picker';

var picker = new AppointmentPicker(document.getElementById('time-1'), {
  interval: 60,
  mode: '12h',
  minTime: 9,
  maxTime: 19,
  startTime: 9,
  endTime: 19,
  disabled: ['16:30', '17:00'],
  templateInner: '<li class="appo-picker-list-item {{disabled}}"><input type="button" tabindex="-1" value="{{time}}" {{disabled}}></li>',
  templateOuter: '<span class="appo-picker-title">{{title}}</span><ul class="appo-picker-list">{{innerHtml}}</ul>'
});

document.getElementById('time-1').addEventListener('click', function() {
	picker.open();
})

// document.getElementById('time-1').addEventListener('change.appo.picker', function (e) {});
// document.getElementById('time-1').addEventListener('close.appo.picker', function (e) {});
// document.getElementById('time-1').addEventListener('open.appo.picker', function (e) {});




// Get the value and save it as a variable
const email = document.getElementById("email").value.trim();
const date = document.getElementById("date").value.trim();
const time = document.getElementById("time-1").value.trim();
const service = document.getElementById("description").value.trim();
const apptForm = document.getElementById("apptForm");

// Create HTML


const postAppt = (appt) =>
  fetch("/book/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appt),
  })
    .then((res) => res.json())
    .catch(() => console.error("Error in POST request"));

// Create the event listener. 
apptForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create an object
  const newAppt = {
    email: email.value.trim(),
    date: date.value.trim(),
    time: time.value.trim(),
    service: service.value(),
  };

  // Make a POST request to the server
  postAppt(newAppt)
    .then(() => console.log("Success"))
    .catch((err) => console.error(err));
});
