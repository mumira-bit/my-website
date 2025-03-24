document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  alert('Form submitted successfully');
  // Add your form submission logic here
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Load content dynamically
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const page = this.getAttribute('href');
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.querySelector('.content').innerHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('.content').innerHTML;
      })
      .catch(error => console.error('Error loading content:', error));
  });
});