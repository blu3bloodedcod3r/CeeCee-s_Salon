//   createing new service
const newServiceHandler = async (event) => {
  event.preventDefault();
  
const name = document.querySelector('#service-name').value.trim();
const description = document.querySelector('#description').value.trim();
const price = document.querySelector('#price').value.trim();
const duration = document.querySelector('#duration').value.trim();
const filename = document.querySelector('#filename').value.trim();
  
console.log(name, description, price, duration, filename)

    const response = await fetch('/admin/services', {
      method: 'POST',
      body: JSON.stringify({ name, description, price, duration, filename }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response)
    if (response.ok) {
      document.location.replace('/admin/services');
    } else {
      alert('Failed to create newservice');
    }
  };

// Deleting a Service
const delButtonHandler = async (id) => {
    console.log('delete button clicked')
  // if (event.target.hasAttribute('service-id')) {
  //   const id = event.target.getAttribute('service-id');
    console.log(id)
    const response = await fetch(`/admin/services`, { method: 'DELETE', 
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    if (response.ok) {
      document.location.replace('/admin/services');
    } else {
      alert('Failed to delete post');
    }
  
};


document
  .querySelector('form')
  .addEventListener('submit', newServiceHandler);

//  eventlistener call happens before elements are dynamically created. So have to access buttons this way
  document.addEventListener("click", function(e){
    const target = e.target.closest("#delete");
      if(target){
        const id = e.target.getAttribute('service-id');
      console.log(id)
      delButtonHandler(id);
    }
  });
