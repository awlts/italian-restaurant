document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu (for custom implementation - Bootstrap handles its own)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // Scroll Animation (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.card, .row, .gif-container');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Add class for animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            .hover-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
            }
        </style>
    `);

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // BGM Audio Player
    const bgmAudio = document.getElementById('bgmAudio');
    const playBgmBtn = document.getElementById('playBgmBtn');
    const playIcon = document.getElementById('playIcon');
    const volumeControl = document.getElementById('volumeControl');

    if (bgmAudio && playBgmBtn) {
        // Set initial volume
        bgmAudio.volume = 0.3;

        playBgmBtn.addEventListener('click', () => {
            if (bgmAudio.paused) {
                bgmAudio.play().then(() => {
                    playIcon.classList.remove('bi-play-fill');
                    playIcon.classList.add('bi-pause-fill');
                    playBgmBtn.innerHTML = '<i class="bi bi-pause-fill" id="playIcon"></i> 停止';
                }).catch(err => {
                    console.log('Audio playback failed:', err);
                });
            } else {
                bgmAudio.pause();
                playIcon.classList.remove('bi-pause-fill');
                playIcon.classList.add('bi-play-fill');
                playBgmBtn.innerHTML = '<i class="bi bi-play-fill" id="playIcon"></i> 再生';
            }
        });

        if (volumeControl) {
            volumeControl.addEventListener('input', (e) => {
                bgmAudio.volume = e.target.value;
            });
        }
    }
});
