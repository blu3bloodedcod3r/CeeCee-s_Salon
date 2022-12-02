// Reference: 11-Express > 17-Ins_POST-Fetch, 21_Ins_Modular-Routing

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
