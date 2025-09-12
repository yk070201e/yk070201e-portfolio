// Library Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const libraryGrid = document.getElementById('libraryGrid');
    const libraryItems = document.querySelectorAll('.library-item');
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.page-btn.prev');
    const nextBtn = document.querySelector('.page-btn.next');

    // Current state
    let currentCategory = 'all';
    let currentSearchTerm = '';
    let currentPage = 1;
    const itemsPerPage = 6;

    // Smooth scrolling for navigation links
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

    // Play button interactions
    const playButtons = document.querySelectorAll('.play-btn');
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

    // Search functionality
    searchInput.addEventListener('input', function() {
        currentSearchTerm = this.value.toLowerCase();
        currentPage = 1;
        filterAndDisplayItems();
    });

    // Filter tabs functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            filterAndDisplayItems();
        });
    });

    // Download button functionality
    libraryItems.forEach(item => {
        const downloadBtn = item.querySelector('.download-btn');
        downloadBtn.addEventListener('click', function() {
            const itemTitle = item.querySelector('.item-title').textContent;
            const downloadUrl = item.getAttribute('data-download-url');
            const fileName = item.getAttribute('data-file-name');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 실제 다운로드 실행
            if (downloadUrl) {
                // 런처 파일인 경우 특별 처리
                if (downloadUrl.includes('.exe')) {
                    showLauncherDownloadWarning(itemTitle, downloadUrl, fileName);
                } else {
                    downloadFile(downloadUrl, fileName, itemTitle);
                }
            } else {
                console.log(`Download URL not found for: ${itemTitle}`);
                alert(`${itemTitle}의 다운로드 링크를 찾을 수 없습니다.`);
            }
        });
    });

    // Pagination functionality
    pageNumbers.forEach((pageNum, index) => {
        pageNum.addEventListener('click', function() {
            currentPage = index + 1;
            updatePagination();
            filterAndDisplayItems();
        });
    });

    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            filterAndDisplayItems();
        }
    });

    nextBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(getFilteredItems().length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            filterAndDisplayItems();
        }
    });

    // Filter and display items
    function filterAndDisplayItems() {
        const filteredItems = getFilteredItems();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToShow = filteredItems.slice(startIndex, endIndex);

        // Hide all items first
        libraryItems.forEach(item => {
            item.style.display = 'none';
        });

        // Show filtered items
        itemsToShow.forEach(item => {
            item.style.display = 'flex';
        });

        // Update pagination
        updatePagination();
    }

    // Get filtered items based on search and category
    function getFilteredItems() {
        return Array.from(libraryItems).filter(item => {
            const title = item.querySelector('.item-title').textContent.toLowerCase();
            const description = item.querySelector('.item-description').textContent.toLowerCase();
            const category = item.getAttribute('data-category');
            
            const matchesSearch = currentSearchTerm === '' || 
                title.includes(currentSearchTerm) || 
                description.includes(currentSearchTerm);
            
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            
            return matchesSearch && matchesCategory;
        });
    }

    // Update pagination
    function updatePagination() {
        const filteredItems = getFilteredItems();
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

        // Update page numbers
        pageNumbers.forEach((pageNum, index) => {
            if (index < totalPages) {
                pageNum.style.display = 'flex';
                pageNum.classList.toggle('active', index + 1 === currentPage);
            } else {
                pageNum.style.display = 'none';
            }
        });

        // Update prev/next buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;

        // Update button styles
        if (prevBtn.disabled) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }

        if (nextBtn.disabled) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }

    // Library items hover effects
    libraryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
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

    // Scroll reveal animation
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
    const animatedElements = document.querySelectorAll('.library-item, .filter-tab, .search-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize display
    filterAndDisplayItems();

    // Add keyboard navigation for search
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Focus on first visible item
            const firstVisibleItem = document.querySelector('.library-item[style*="flex"]');
            if (firstVisibleItem) {
                firstVisibleItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Add category-specific animations
    const categoryColors = {
        'launcher': 'rgb(16, 185, 129)',
        'guide': 'rgb(34, 197, 94)',
        'mod': 'rgb(245, 158, 11)',
        'map': 'rgb(139, 92, 246)',
        'script': 'rgb(239, 68, 68)',
        'texture': 'rgb(59, 130, 246)'
    };

    // Update item colors based on category
    libraryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const icon = item.querySelector('.item-icon i');
        const categorySpan = item.querySelector('.item-category');
        
        if (categoryColors[category]) {
            icon.style.color = categoryColors[category];
            categorySpan.style.background = `${categoryColors[category]}20`;
            categorySpan.style.color = categoryColors[category];
        }
    });

    // Add download progress simulation
    function simulateDownload(itemTitle) {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            border: 1px solid rgba(74, 144, 226, 0.3);
            backdrop-filter: blur(10px);
            z-index: 10000;
            min-width: 250px;
        `;
        
        progressBar.innerHTML = `
            <div style="margin-bottom: 10px; font-weight: 600;">${itemTitle}</div>
            <div style="background: rgba(255, 255, 255, 0.1); height: 4px; border-radius: 2px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, rgb(74, 144, 226), rgb(139, 92, 246)); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
            </div>
            <div style="margin-top: 8px; font-size: 12px; color: #ccc;">다운로드 중...</div>
        `;
        
        document.body.appendChild(progressBar);
        
        const progressFill = progressBar.querySelector('div div');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    progressBar.remove();
                }, 1000);
            }
            progressFill.style.width = progress + '%';
        }, 200);
    }

    // 실제 파일 다운로드 함수
    function downloadFile(url, fileName, itemTitle) {
        // 다운로드 진행률 표시
        showDownloadProgress(itemTitle);
        
        // 방법 1: 직접 링크로 다운로드 (가장 간단)
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // 방법 2: fetch를 사용한 다운로드 (더 많은 제어 가능)
        // downloadFileWithFetch(url, fileName, itemTitle);
    }

    // Fetch를 사용한 다운로드 함수 (대용량 파일에 유용)
    function downloadFileWithFetch(url, fileName, itemTitle) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
                
                // 다운로드 완료 알림
                showDownloadComplete(itemTitle);
            })
            .catch(error => {
                console.error('Download failed:', error);
                showDownloadError(itemTitle, error.message);
            });
    }

    // 다운로드 진행률 표시 함수
    function showDownloadProgress(itemTitle) {
        const progressBar = document.createElement('div');
        progressBar.id = 'download-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            border: 1px solid rgba(74, 144, 226, 0.3);
            backdrop-filter: blur(10px);
            z-index: 10000;
            min-width: 250px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        `;
        
        progressBar.innerHTML = `
            <div style="margin-bottom: 10px; font-weight: 600; color: rgb(74, 144, 226);">${itemTitle}</div>
            <div style="background: rgba(255, 255, 255, 0.1); height: 4px; border-radius: 2px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, rgb(74, 144, 226), rgb(139, 92, 246)); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
            </div>
            <div style="margin-top: 8px; font-size: 12px; color: #ccc;">다운로드 시작...</div>
        `;
        
        document.body.appendChild(progressBar);
        
        const progressFill = progressBar.querySelector('div div');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    progressBar.remove();
                }, 1000);
            }
            progressFill.style.width = progress + '%';
        }, 100);
    }

    // 다운로드 완료 알림
    function showDownloadComplete(itemTitle) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(34, 197, 94, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            backdrop-filter: blur(10px);
            z-index: 10000;
            min-width: 250px;
            box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle" style="font-size: 18px;"></i>
                <div>
                    <div style="font-weight: 600;">다운로드 완료!</div>
                    <div style="font-size: 12px; opacity: 0.9;">${itemTitle}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // 다운로드 오류 알림
    function showDownloadError(itemTitle, errorMessage) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(239, 68, 68, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            backdrop-filter: blur(10px);
            z-index: 10000;
            min-width: 250px;
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 18px;"></i>
                <div>
                    <div style="font-weight: 600;">다운로드 실패</div>
                    <div style="font-size: 12px; opacity: 0.9;">${itemTitle}</div>
                    <div style="font-size: 10px; opacity: 0.7;">${errorMessage}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // 런처 다운로드 경고 모달
    function showLauncherDownloadWarning(itemTitle, downloadUrl, fileName) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="background: rgba(20, 20, 20, 0.95); border: 1px solid rgba(74, 144, 226, 0.3); border-radius: 16px; padding: 30px; max-width: 500px; width: 100%; backdrop-filter: blur(20px);">
                <div style="text-align: center; margin-bottom: 25px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(74, 144, 226, 0.2)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
                        <i class="fas fa-rocket" style="font-size: 24px; color: rgb(16, 185, 129);"></i>
                    </div>
                    <h3 style="color: #fff; font-size: 1.3rem; font-weight: 600; margin-bottom: 10px;">런처 다운로드</h3>
                    <p style="color: #ccc; font-size: 1rem; line-height: 1.5;">${itemTitle}</p>
                </div>
                
                <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <i class="fas fa-exclamation-triangle" style="color: rgb(245, 158, 11); font-size: 16px;"></i>
                        <span style="color: rgb(245, 158, 11); font-weight: 600; font-size: 14px;">보안 경고</span>
                    </div>
                    <p style="color: #ccc; font-size: 13px; line-height: 1.4; margin: 0;">
                        이 파일은 실행 파일(.exe)입니다. 다운로드 후 바이러스 검사를 권장하며, 신뢰할 수 있는 소스에서만 다운로드하세요.
                    </p>
                </div>
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="cancelDownload" style="padding: 12px 24px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: #ccc; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                        취소
                    </button>
                    <button id="confirmDownload" style="padding: 12px 24px; background: linear-gradient(135deg, rgb(16, 185, 129), rgb(74, 144, 226)); border: none; color: white; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                        <i class="fas fa-download" style="margin-right: 8px;"></i>
                        다운로드 계속
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 버튼 이벤트
        document.getElementById('cancelDownload').addEventListener('click', () => {
            modal.remove();
        });
        
        document.getElementById('confirmDownload').addEventListener('click', () => {
            modal.remove();
            downloadFile(downloadUrl, fileName, itemTitle);
        });
        
        // 모달 외부 클릭 시 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // ESC 키로 닫기
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    }
});
