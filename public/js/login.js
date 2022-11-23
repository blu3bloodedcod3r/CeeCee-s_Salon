const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    console.log(email, password);


    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          email,
          password,
        }),
        headers: {'Content-Type': 'application/json'},
      });
    console.log(response);

};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);