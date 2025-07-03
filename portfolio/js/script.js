// Hero text animation
window.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('intro-text');
    const words = text.textContent.split(' ');
    text.textContent = '';
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.animationDelay = `${index * 0.3}s`;
        text.appendChild(span);
    });
});

// Read more toggle
const readMoreBtn = document.getElementById('read-more');
const bioLong = document.getElementById('bio-long');
readMoreBtn.addEventListener('click', () => {
    bioLong.classList.toggle('hidden');
    readMoreBtn.textContent = bioLong.classList.contains('hidden') ? 'Read More' : 'Show Less';
});

// Simple testimonial carousel
const testimonials = [
    { img: 'assets/images/testimonial1.jpg', quote: '"Outstanding work and seamless communication!"', author: 'Alex, Product Manager' },
    { img: 'assets/images/testimonial2.jpg', quote: '"Highly recommend for any web project."', author: 'Jamie, Startup CEO' },
    { img: 'assets/images/testimonial3.jpg', quote: '"Creative and professional approach."', author: 'Sam, Designer' },
    { img: 'assets/images/testimonial4.jpg', quote: '"Delivered beyond expectations."', author: 'Taylor, Entrepreneur' },
    { img: 'assets/images/testimonial5.jpg', quote: '"Fantastic collaborator and coder."', author: 'Riley, Engineer' }
];
let currentTestimonial = 0;
const carousel = document.querySelector('.testimonial-carousel');
function renderTestimonial(index) {
    const t = testimonials[index];
    carousel.innerHTML = `<div class="testimonial"><img src="${t.img}" alt="${t.author}"><p class="quote">${t.quote}</p><span class="author">${t.author}</span></div>`;
}
renderTestimonial(currentTestimonial);
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
}, 5000);

// Mapbox placeholder
function initMap() {
    // Mapbox initialization placeholder. Replace YOUR_MAPBOX_KEY with actual key.
    // const map = new mapboxgl.Map({
    //     accessToken: 'YOUR_MAPBOX_KEY',
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [0,0],
    //     zoom: 2
    // });
}
initMap();
