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

    const categoryCards = document.querySelectorAll('.category-card');
    const dynamicModal = document.getElementById('dynamic-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');

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

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal();
        });
    });
    
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

    // 3. Scroll Reveal Animation
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
