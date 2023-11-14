const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 

hamburger.addEventListener('click', () => { 
navMenu.classList.toggle('hide'); 
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending email (console log for demonstration purposes)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can display a success message to the user
    alert('Message sent! (This is a simulation, no email has been sent)');
    
    // Clear the form fields
    this.reset();
});
