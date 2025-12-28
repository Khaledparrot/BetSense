// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections as they come into view
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Handle mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Platform search and filter logic (SAFE)
const searchInput = document.querySelector('input[placeholder="Search platforms..."]');
const filterButtons = document.querySelectorAll('.platform-filters button');
const platformCards = document.querySelectorAll('.grid .bg-white');

if (searchInput && filterButtons.length && platformCards.length) {
    const filterPlatforms = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter =
            document.querySelector('.platform-filters button.active')?.dataset.filter || 'all';

        platformCards.forEach(card => {
            const title = card.querySelector('h3');
            if (!title) return;

            const platformName = title.textContent.toLowerCase();

            // Split categories by space to handle multiple categories
            const platformCategories = (card.dataset.category || 'all').split(' ');

            const matchesSearch = platformName.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || platformCategories.includes(activeFilter);

            card.style.display = matchesSearch && matchesFilter ? '' : 'none';
        });
    };

    searchInput.addEventListener('input', filterPlatforms);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPlatforms();
        });
    });
}

    // Problem Gambling Self-Assessment logic
    const assessmentForm = document.getElementById('self-assessment-form');
    const resultContainer = document.getElementById('assessment-result');

    if (assessmentForm && resultContainer) {
        assessmentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            const responses = Array.from(assessmentForm.querySelectorAll('input[type="radio"]:checked'));

            if (responses.length < 5) {
                resultContainer.textContent = 'Please answer all the questions before submitting.';
                resultContainer.classList.remove('hidden');
                resultContainer.classList.add('text-red-500');
                return;
            }

            const riskScore = responses.reduce((score, input) => {
                return score + (input.value === 'yes' ? 1 : 0);
            }, 0);

            let resultMessage = '';

            if (riskScore === 0) {
                resultMessage = 'You are safe. No signs of problem gambling detected.';
                resultContainer.classList.remove('text-red-500');
                resultContainer.classList.add('text-green-500');
            } else if (riskScore <= 3) {
                resultMessage = 'You may be at low risk. Consider monitoring your gambling habits.';
                resultContainer.classList.remove('text-red-500');
                resultContainer.classList.add('text-yellow-500');
            } else {
                resultMessage = 'You are at high risk. Please seek help from responsible gambling resources.';
                resultContainer.classList.remove('text-green-500', 'text-yellow-500');
                resultContainer.classList.add('text-red-500');
            }

            resultContainer.textContent = resultMessage;
            resultContainer.classList.remove('hidden');
            
        });
    }
});

// Track outbound links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href.includes('http') && !e.target.href.includes(window.location.hostname)) {
        // Here you would typically send this data to analytics
        console.log('Outbound link clicked:', e.target.href);
    }
});




// ===============================
// Contact Form - EmailJS
// ===============================
const contactForm = document.querySelector('#name')?.closest('form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('#name');
        const email = contactForm.querySelector('#email');
        const subject = contactForm.querySelector('#subject');
        const message = contactForm.querySelector('#message');

        // Remove old feedback
        contactForm.querySelector('.form-feedback')?.remove();

        // Validation
        if (!name.value || !email.value || !subject.value || !message.value) {
            showFeedback('Please fill in all fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showFeedback('Please enter a valid email address.', 'error');
            return;
        }

        // EmailJS parameters
        const params = {
            from_name: name.value,
            from_email: email.value,
            subject: subject.value,
            message: message.value
        };

        // Disable button while sending
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Sending...';

        emailjs
            .send(
                'service_iy6x79n',
                'template_h5zwncn',
                params
            )
            .then(() => {
                showFeedback(
                    '✅ Message sent successfully. We will contact you soon.',
                    'success'
                );
                contactForm.reset();
            })
            .catch(() => {
                showFeedback(
                    '❌ Failed to send message. Please try again later.',
                    'error'
                );
            })
            .finally(() => {
                btn.disabled = false;
                btn.textContent = 'Send Message';
            });
    });

    function showFeedback(text, type) {
        const div = document.createElement('div');
        div.className =
            'form-feedback mt-4 text-center text-sm rounded-lg px-4 py-3 ' +
            (type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-600');

        div.textContent = text;
        contactForm.appendChild(div);
        // div.scrollIntoView({ behavior: 'smooth' });
    }
}
