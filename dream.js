document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close the Bootstrap navbar on click for mobile devices
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Manually trigger the collapse utility (Requires bootstrap variable to be available)
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }

            // Scroll smoothly to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Navbar Scroll Effect (Adds 'scrolled' class for styling)
    const navbar = document.querySelector('.custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Client-Side Form Validation (Basic Search Form)
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            const destination = document.getElementById('destination').value.trim();
            const date = document.getElementById('travel-date').value.trim();

            if (!destination) {
                event.preventDefault(); // Stop form submission
                console.error('Validation Error: Please enter a destination to search!');
            } else if (!date) {
                event.preventDefault();
                console.error('Validation Error: Please select a travel date!');
            } else {
                // If validation passes (in a real app, this would redirect or fetch data)
                console.log(`Search Submitted: ${destination} on ${date}`);
                // event.preventDefault();
            }
        });
    }
    
    // 4. Newsletter Form Submission Handler (Prevents default submit)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
         newsletterForm.addEventListener('submit', function(event) {
             event.preventDefault();
             console.log('Newsletter subscription submitted.');
             this.reset();
         });
    }
});