/* Monolith Barber Studio - Global Interactivity & Animation Engine */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Load & Transition Setup
    document.body.classList.add('page-loaded');

    // Handle Smooth Page Transitions on Link Clicks
    const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]):not([href^="javascript:"])');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;

            // Only transition for local/internal html pages
            if (href.endsWith('.html') || href.startsWith('/') || href.startsWith('./') || !href.includes(':')) {
                e.preventDefault();
                document.body.classList.add('page-exiting');
                setTimeout(() => {
                    window.location.href = href;
                }, 280);
            }
        });
    });

    // 2. Highlight Active Navigation Items (Desktop & Mobile)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activePage = currentPath === '' ? 'index.html' : currentPath;

    // Desktop nav links
    document.querySelectorAll('nav a, header a').forEach(navLink => {
        const href = navLink.getAttribute('href');
        if (href === activePage || (activePage === 'index.html' && (href === 'index.html' || href === '#'))) {
            if (navLink.classList.contains('text-on-surface-variant/80')) {
                navLink.classList.remove('text-on-surface-variant/80');
                navLink.classList.add('text-primary', 'bg-white/10', 'px-4', 'py-2', 'rounded-full');
            }
        }
    });

    // Mobile floating nav links
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href === activePage || (activePage === 'index.html' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-item, .fade-in-up, .reveal-left, .reveal-right, .scale-in');
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.12
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible', 'visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => scrollObserver.observe(el));
    }

    // 4. Parallax Hero Card & Mouse Movements
    const heroCard = document.getElementById('hero-card') || document.querySelector('.parallax-element');
    if (heroCard) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.clientX) / 45;
            const yAxis = (window.innerHeight / 2 - e.clientY) / 45;
            heroCard.style.transform = `translate3d(${xAxis}px, ${yAxis}px, 0)`;
        });

        document.addEventListener('mouseleave', () => {
            heroCard.style.transform = `translate3d(0px, 0px, 0)`;
        });
    }

    // Parallax background on scroll
    const parallaxBgs = document.querySelectorAll('.parallax-bg, .parallax-background');
    if (parallaxBgs.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxBgs.forEach(bg => {
                bg.style.transform = `translateY(${scrolled * 0.25}px)`;
            });
        });
    }

    // 5. Spotlight Effect on Hoverable Glass Cards
    document.querySelectorAll('.service-card-hover, .glass-panel').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const spotlight = card.querySelector('.spotlight');
            if (spotlight) {
                spotlight.style.transform = `translate(${x - 128}px, ${y - 128}px)`;
            }
        });
    });

    // 6. Statistics Counter Animation
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target') || 100;
                    const duration = 1800; // ms
                    const step = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.innerText = Math.ceil(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + '+';
                        }
                    };
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // 7. Booking Form WhatsApp Dispatch
    const bookingForm = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBooking');

    const handleBooking = (e) => {
        if (e) e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');
        const serviceSelect = document.getElementById('service');
        const messageInput = document.getElementById('message');

        // Check required fields
        if (bookingForm && !bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        const name = nameInput ? nameInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const date = dateInput ? dateInput.value : '';
        const time = timeInput ? timeInput.value : '';
        const service = serviceSelect ? (serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value) : 'General Service';
        const message = messageInput ? messageInput.value : '';

        // Construct formatted WhatsApp message
        let waMsg = `*NEW APPOINTMENT REQUEST*\n\n`;
        if (name) waMsg += `*Name:* ${name}\n`;
        if (phone) waMsg += `*Phone:* ${phone}\n`;
        if (email) waMsg += `*Email:* ${email}\n\n`;
        if (date) waMsg += `*Requested Date:* ${date}\n`;
        if (time) waMsg += `*Requested Time:* ${time}\n`;
        waMsg += `*Service:* ${service}\n`;
        if (message && message.trim() !== '') waMsg += `\n*Notes:* ${message}\n`;

        const waNumber = '8529629979';
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;
        window.open(waUrl, '_blank');
    };

    if (submitBtn) {
        submitBtn.addEventListener('click', handleBooking);
    }
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }

    // Pre-select service from URL query params (e.g., booking.html?service=Precision+Cut)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value.toLowerCase().includes(serviceParam.toLowerCase()) || 
                serviceSelect.options[i].text.toLowerCase().includes(serviceParam.toLowerCase())) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }

    // 8. Gallery Lightbox Modal Setup
    const galleryImages = document.querySelectorAll('main img');
    if (galleryImages.length > 0) {
        // Create modal element
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-content relative max-w-4xl max-h-[85vh] p-2 glass-panel">
                <button class="absolute top-4 right-4 text-primary bg-surface/80 rounded-full p-2 hover:bg-white/20 transition-colors z-50 focus:outline-none" id="closeLightbox">
                    <span class="material-symbols-outlined block">close</span>
                </button>
                <img src="" alt="" class="w-full h-full object-contain rounded-lg max-h-[80vh]" id="lightboxImg">
                <p class="text-center font-label-sm text-label-sm text-secondary mt-3 uppercase tracking-widest px-4 pb-2" id="lightboxCaption"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const lightboxImg = modal.querySelector('#lightboxImg');
        const lightboxCaption = modal.querySelector('#lightboxCaption');
        const closeBtn = modal.querySelector('#closeLightbox');

        galleryImages.forEach(img => {
            // Make pointer cursor if part of gallery bento
            if (img.closest('.group') || img.closest('.glass-panel')) {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerText = img.getAttribute('data-alt') || img.alt || 'MONOLITH BARBER';
                    modal.classList.add('is-open');
                });
            }
        });

        const closeModal = () => modal.classList.remove('is-open');
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
