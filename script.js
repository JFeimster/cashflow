// Mobile Navigation Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
closeMobileMenuButton.addEventListener('click', toggleMobileMenu);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion Logic
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        accordionContent.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');

        // Optional: Close other open accordions
        document.querySelectorAll('.accordion-content').forEach(otherContent => {
            if (otherContent !== accordionContent && !otherContent.classList.contains('hidden')) {
                otherContent.classList.add('hidden');
                otherContent.previousElementSibling.querySelector('.accordion-icon').classList.remove('rotate-180');
            }
        });
    });
});

// Auth Modal Logic
const authModal = document.getElementById('authModal');
const openAuthModalButtons = document.querySelectorAll('#openAuthModal, #openAuthModalMobile');
const closeAuthModalButton = document.getElementById('closeAuthModal');
const showLoginButton = document.getElementById('showLogin');
const showSignupButton = document.getElementById('showSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function openAuthModal() {
    authModal.style.display = 'flex'; // Use flex to center content
    document.body.classList.add('overflow-hidden');
}

function closeAuthModal() {
    authModal.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
}

openAuthModalButtons.forEach(button => {
    button.addEventListener('click', openAuthModal);
});
closeAuthModalButton.addEventListener('click', closeAuthModal);

// Close modal if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target == authModal) {
        closeAuthModal();
    }
});

// Toggle Login/Signup Forms
showLoginButton.addEventListener('click', () => {
    showLoginButton.classList.add('active');
    showSignupButton.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

showSignupButton.addEventListener('click', () => {
    showSignupButton.classList.add('active');
    showLoginButton.classList.remove('active');
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});
