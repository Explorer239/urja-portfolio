
// Display a welcome message in the browser console
console.log("Welcome to Urja's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = this.getAttribute('href');

        if (target && target.startsWith('#')) {
            const section = document.querySelector(target);

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
