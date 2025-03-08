document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = dots.length;

    // Function to change slide
    function goToSlide(slideIndex) {
        // Reset all dots
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Set active dot
        dots[slideIndex].classList.add('active');
        
        // Here you would normally change the background image or content
        // For this demo, we're just changing the active dot
        currentSlide = slideIndex;
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Event listeners for arrows
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    });

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            alert('Searching for: ' + searchInput.value);
            // Here you would normally implement the actual search functionality
            searchInput.value = '';
        }
    });

    // Card hover effects
    const materialCards = document.querySelectorAll('.material-card');
    materialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Contact card hover effects
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
            
            // Find arrow link inside this card and animate it
            const arrowLink = this.querySelector('.arrow-link');
            if (arrowLink) {
                arrowLink.style.backgroundColor = '#1a3a5f';
                arrowLink.style.transform = 'scale(1.1)';
                arrowLink.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            
            // Reset arrow link styles
            const arrowLink = this.querySelector('.arrow-link');
            if (arrowLink) {
                arrowLink.style.backgroundColor = '';
                arrowLink.style.transform = '';
            }
        });
    });

    // Mobile menu toggle (for responsive design)
    // This would be implemented if we had a hamburger menu for mobile
});

