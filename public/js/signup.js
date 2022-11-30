const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  console.log(email, password);

  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ 
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    });
    console.log("response", response);

    if (response.ok) {
      document.location.replace('/');
      } else {
        alert("Problem with signup, Try again!")
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);