document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const modal = document.getElementById('modal-blog');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.querySelector('.modal-close');

    if(openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            modal.style.display = 'flex';
            
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            
            document.body.style.overflow = 'hidden';
        });
    }

    const closeModal = () => {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    if(closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.project-card, .skills-category, .timeline-item');
    hiddenElements.forEach((el) => observer.observe(el));
});