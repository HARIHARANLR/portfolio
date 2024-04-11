// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Send the form data to server or handle it as required
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    this.reset();
  });
});
