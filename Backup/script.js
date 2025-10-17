// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mainMenu = document.querySelector('.main-menu');

if (mobileToggle && mainMenu) {
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mainMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking menu items
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mainMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            mainMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = 112;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to elements
const animateElements = document.querySelectorAll(
    '.card-item, .success-item, .insight-card, .news-item'
);

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    fadeInObserver.observe(el);
});

// Success Story Carousel Dots
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        console.log(`Carousel page ${index + 1}`);
    });
});

// News Carousel Navigation
const newsPrevBtn = document.querySelector('.news-prev');
const newsNextBtn = document.querySelector('.news-next');
const newsDots = document.querySelectorAll('.news-dot');

if (newsPrevBtn && newsNextBtn) {
    newsPrevBtn.addEventListener('click', () => {
        console.log('Previous news page');
        // Here you would implement actual carousel logic
    });

    newsNextBtn.addEventListener('click', () => {
        console.log('Next news page');
        // Here you would implement actual carousel logic
    });
}

// News Dots Navigation
newsDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        newsDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        console.log(`News carousel page ${index + 1}`);
    });
});

// Lazy Load Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Page Load Fade
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// Console Branding
console.log(
    '%c IBA Consulting ',
    'background: #005587; color: white; font-size: 16px; padding: 8px 16px; font-weight: bold;'
);
