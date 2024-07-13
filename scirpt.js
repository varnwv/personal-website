document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '6283871670072'; // Ganti dengan nomor WhatsApp kamu
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=
        Name: ${encodeURIComponent(name)}%0A
        Email: ${encodeURIComponent(email)}%0A
        Subject: ${encodeURIComponent(subject)}%0A
        Message: ${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});



