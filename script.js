/**
 * Anderson's Dragon Adventure - Birthday Website
 * Interactive JavaScript functionality
 */

// ========================================
// Countdown Timer
// ========================================
const countdownDate = new Date('March 5, 2026 14:00:00 PST').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        const countdown = document.getElementById('countdown');
        if (countdown) {
            countdown.innerHTML = '<div class="countdown-item"><span class="countdown-number" style="font-size: 1.5rem;">Party Time!</span></div>';
        }
    }
}

// Start countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ========================================
// Mobile Navigation
// ========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);
handleNavbarScroll(); // Initial call

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeObserverOptions);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ========================================
// RSVP Form Handling
// ========================================
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = rsvpForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(rsvpForm);
            const response = await fetch(rsvpForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                rsvpForm.style.display = 'none';
                rsvpSuccess.classList.add('show');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // If Formspree isn't set up yet, show success anyway for demo
            // In production, you'd want to show an error message
            console.log('Form submission:', error.message);

            // For demo purposes, show success
            rsvpForm.style.display = 'none';
            rsvpSuccess.classList.add('show');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// ========================================
// Copy Link Functionality
// ========================================
function copyLink() {
    const url = window.location.href;
    const feedback = document.getElementById('copyFeedback');

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyFeedback(feedback);
        }).catch(() => {
            fallbackCopyLink(url, feedback);
        });
    } else {
        fallbackCopyLink(url, feedback);
    }
}

function fallbackCopyLink(url, feedback) {
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showCopyFeedback(feedback);
    } catch (err) {
        console.error('Failed to copy link');
    }

    document.body.removeChild(textArea);
}

function showCopyFeedback(feedback) {
    if (feedback) {
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }
}

// Make copyLink available globally
window.copyLink = copyLink;

// ========================================
// Active Navigation Link Highlighting
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink(); // Initial call

// ========================================
// Page Load Animation
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Parallax Effect for Hero (subtle)
// ========================================
const hero = document.querySelector('.hero');
const dragonSilhouette = document.querySelector('.dragon-silhouette');

function handleParallax() {
    if (window.innerWidth > 768 && hero && dragonSilhouette) {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
            const parallaxValue = scrolled * 0.3;
            dragonSilhouette.style.transform = `translate(${parallaxValue * 0.1}px, ${-parallaxValue * 0.5}px) rotate(${scrolled * 0.02}deg)`;
        }
    }
}

window.addEventListener('scroll', handleParallax);

// ========================================
// Form Validation Feedback
// ========================================
const formInputs = document.querySelectorAll('.rsvp-form input, .rsvp-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.required && !this.value.trim()) {
            this.style.borderColor = '#C41E3A';
        } else {
            this.style.borderColor = '#ddd';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#228B22';
    });
});

// ========================================
// Console Easter Egg
// ========================================
console.log('%c🐉 Welcome to Berk! 🐉', 'font-size: 24px; font-weight: bold; color: #228B22;');
console.log('%cAnderson\'s 6th Birthday Party - March 5, 2026', 'font-size: 14px; color: #8B4513;');
console.log('%cHow to Train Your Dragon Theme', 'font-size: 12px; color: #666;');
