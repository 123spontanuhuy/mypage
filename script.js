const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 

hamburger.addEventListener('click', () => { 
navMenu.classList.toggle('hide'); 
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

  
    alert('Message sent! (This is a simulation, no email has been sent)');
    
   
    this.reset();
});
