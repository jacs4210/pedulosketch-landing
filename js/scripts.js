document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Dynamic Category Modal
    const galleryData = {
        cats: [
            { src: 'assets/gallery/cats/Lila_Kiko.webp', name: 'Lila y Kiko' },
            { src: 'assets/gallery/cats/Loki.webp', name: 'Loki' },
            { src: 'assets/gallery/cats/Simba.webp', name: 'Simba' }
        ],
        dogs: [
            { src: 'assets/gallery/dogs/Burbuja.webp', name: 'Burbuja' },
            { src: 'assets/gallery/dogs/Falcao.webp', name: 'Falcao' },
            { src: 'assets/gallery/dogs/Frida_Kaisser.webp', name: 'Frida Kaisser' },
            { src: 'assets/gallery/dogs/Jack.webp', name: 'Jack' },
            { src: 'assets/gallery/dogs/Junior.webp', name: 'Junior' },
            { src: 'assets/gallery/dogs/Mani.webp', name: 'Mani' },
            { src: 'assets/gallery/dogs/Milo.webp', name: 'Milo' },
            { src: 'assets/gallery/dogs/Narbú.webp', name: 'Narbú' },
            { src: 'assets/gallery/dogs/Oliva.webp', name: 'Oliva' },
            { src: 'assets/gallery/dogs/Pepa.webp', name: 'Pepa' },
            { src: 'assets/gallery/dogs/Rex.webp', name: 'Rex' },
            { src: 'assets/gallery/dogs/Suga.webp', name: 'Suga' },
            { src: 'assets/gallery/dogs/Thoridio.webp', name: 'Thoridio' },
            { src: 'assets/gallery/dogs/Toby.webp', name: 'Toby' }
        ]
    };

    const illustrationFan = document.querySelector('.illustration-fan');
    const dynamicModal = document.getElementById('dynamic-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    
    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    function openModal() {
        // Set Title
        modalTitle.textContent = 'Todos nuestros peluditos';
        
        // Populate Gallery (Merge cats and dogs)
        modalGallery.innerHTML = ''; // clear previous
        const items = [...galleryData.cats, ...galleryData.dogs];
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${item.src}" alt="${item.name}">`;
            
            // Add click for Zoom
            div.addEventListener('click', () => openZoom(item.src));
            
            modalGallery.appendChild(div);
        });

        // Show Modal
        document.body.style.overflow = 'hidden'; // prevent background scrolling
        dynamicModal.style.display = 'block';
        setTimeout(() => {
            dynamicModal.style.opacity = '1';
        }, 10);
    }

    function closeModal() {
        dynamicModal.style.opacity = '0';
        document.body.style.overflow = 'auto'; // restore scrolling
        setTimeout(() => {
            dynamicModal.style.display = 'none';
        }, 300);
    }

    function openZoom(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightbox.classList.add('lightbox-active');
        }, 10);
    }

    function closeZoom() {
        lightbox.classList.remove('lightbox-active');
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }

    if (illustrationFan) {
        illustrationFan.addEventListener('click', openModal);
    }
    
    const viewAllBtn = document.getElementById('view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            openModal();
        });
    }

    modalClose.addEventListener('click', closeModal);

    // Close modal on outside click (optional)
    dynamicModal.addEventListener('click', (e) => {
        if(e.target === dynamicModal || e.target.classList.contains('modal-content')) {
            closeModal();
        }
    });

    // Lightbox close
    lightbox.addEventListener('click', closeZoom);


    // 4. Scroll Effects (Header & Back to Top)
    const mainHeader = document.querySelector('.main-header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header effect
        if (scrollY > 50) {
            mainHeader.classList.add('header-scrolled');
        } else {
            mainHeader.classList.remove('header-scrolled');
        }

        // Back to Top visibility
        if (scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside (on the body/overlay)
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 3. Scroll Reveal Animation (Moved back to top part or initialized correctly)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.pricing-card, .about-content, .feature-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

});
