// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Play button interactions
    const playButtons = document.querySelectorAll('.play-btn, .hero-play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you would typically redirect to the game or show a modal
            console.log('Play button clicked!');
            alert('게임을 시작합니다! (실제 구현에서는 게임 페이지로 이동)');
        });
    });

    // News Slider Functionality
    const initNewsSlider = () => {
        const slider = document.querySelector('.news-slider');
        
        if (!slider) return;
        
        // 뉴스 데이터를 사용하여 카드 생성
        const createNewsCards = () => {
            slider.innerHTML = '';
            
            // 최신 6개 뉴스만 표시
            const latestNews = newsData.slice(0, 6);
            
            latestNews.forEach((item, index) => {
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                
                // 뉴스 카드에서는 마크다운 변환 없이 일반 텍스트만 표시
                const previewText = item.content
                    .replace(/^#+\s*/gm, '') // 제목 마크다운 제거
                    .replace(/^- /gm, '• ') // - 를 • 로 변환 (미리보기용)
                    .replace(/\*\*(.*?)\*\*/g, '$1') // ** 제거
                    .substring(0, 80) + '...';
                
                newsCard.innerHTML = `
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}" loading="lazy" />
                        <div class="news-tag" style="background-color: ${item.tagColor || 'rgba(74, 144, 226, 0.9)'}">${item.tag}</div>
                    </div>
                    <div class="news-content">
                        <h3 class="news-card-title">${item.title}</h3>
                        <p>${previewText}</p>
                        <div class="news-meta">
                            <span class="news-author">${item.author.name}</span>
                            <span class="news-date">${item.date}</span>
                        </div>
                    </div>
                `;
                
                // 클릭 시 뉴스 페이지로 이동
                newsCard.addEventListener('click', () => {
                    window.location.href = './page/news/news.html';
                });
                
                slider.appendChild(newsCard);
            });
        };
        
        // 카드 생성
        createNewsCards();
        
        const cards = document.querySelectorAll('.news-card');
        
        if (!cards.length) return;
        
        let currentSlide = 0;
        const cardsPerSlide = 4;
        const totalSlides = Math.ceil(cards.length / cardsPerSlide);
        
        // Update dots based on total slides
        const dotsContainer = document.querySelector('.slider-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.className = `dot ${i === 0 ? 'active' : ''}`;
                dot.setAttribute('data-slide', i);
                dotsContainer.appendChild(dot);
            }
        }
        
        const updateSlider = () => {
            const translateX = -currentSlide * (100 / cardsPerSlide);
            slider.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        };
        
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        };
        
        // Dot navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                currentSlide = parseInt(e.target.getAttribute('data-slide'));
                updateSlider();
            }
        });
        
        // Auto-slide every 30 seconds (30초마다)
        setInterval(nextSlide, 30000);
        
        // Initialize slider
        updateSlider();
        
        // Test modal functionality
        console.log('Testing modal...');
        setTimeout(() => {
            if (modal && modal.style) {
                console.log('Modal is ready for testing');
            }
        }, 1000);
    };

    // Initialize news slider
    initNewsSlider();

    // News card hover effects
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social media icon animations
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        const rate = scrolled * -0.5;
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Mobile menu toggle (for future mobile navigation)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.display = 'none';
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    display: block !important;
                }
                
                .nav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.95);
                    flex-direction: column;
                    padding: 20px;
                    gap: 15px;
                }
                
                .nav.active {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        nav.parentNode.insertBefore(mobileMenuBtn, nav);
    };

    // Initialize mobile menu
    createMobileMenu();

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.news-card, .news-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
