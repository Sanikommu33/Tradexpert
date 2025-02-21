// Function to control the testimonials carousel scrolling horizontally
let scrollPosition = 0;

function scrollTestimonials(direction) {
    const carousel = document.querySelector('.testimonials-carousel');
    const totalWidth = carousel.scrollWidth;
    const carouselWidth = carousel.clientWidth;
    
    // Update scroll position based on direction (left or right)
    scrollPosition += direction * carouselWidth;

    // Ensure the scroll position stays within bounds
    if (scrollPosition < 0) {
        scrollPosition = totalWidth - carouselWidth;
    } else if (scrollPosition > totalWidth - carouselWidth) {
        scrollPosition = 0;
    }

    // Smoothly scroll the carousel
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
}

// Initialize carousel to ensure it starts correctly
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        // Initialize the carousel position (start at 0)
        carousel.scrollLeft = 0;
    }
});

// Form submission event handler
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display an alert with the form data
  alert(`Thank you for contacting us, ${name}!\n\nWe have received your message: \n${message}\nWe will reply to you at ${email}.`);
  
  // Optionally, you can reset the form
  form.reset();
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

