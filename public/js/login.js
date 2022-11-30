const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    console.log(email, password);

  if (email && password) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          email,
          password,
        }),
        headers: {'Content-Type': 'application/json'},
      });
    console.log(response);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Incorrect Email or Password, please try again");
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);