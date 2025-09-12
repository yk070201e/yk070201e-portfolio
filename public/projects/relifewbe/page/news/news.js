// 뉴스 데이터는 news-data.js에서 가져옵니다
// 뉴스 페이지용 이미지 경로 수정
const newsDataForPage = newsData.map(item => ({
    ...item,
    author: {
        ...item.author,
        img: "../news/img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
    },
    image: `../news/img/${item.image.split('/').pop()}`
}));

// DOM 요소들
const newsList = document.getElementById('newsList');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const modalBg = document.getElementById('modalBg');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// 뉴스 렌더링 함수
function renderNews(news = newsDataForPage) {
    newsList.innerHTML = '';
    
    news.forEach((item, index) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        // 뉴스 카드에서는 마크다운 변환 없이 일반 텍스트만 표시
        const previewText = item.content
            .replace(/^#+\s*/gm, '') // 제목 마크다운 제거
            .replace(/^- /gm, '• ') // - 를 • 로 변환 (미리보기용)
            .replace(/\*\*(.*?)\*\*/g, '$1') // ** 제거
            .substring(0, 100) + '...';
        
        newsItem.innerHTML = `
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <div class="news-tag" style="background-color: ${item.tagColor || 'rgba(74, 144, 226, 0.9)'}">${item.tag}</div>
            </div>
            <div class="news-content">
                <h3 class="news-title">${item.title}</h3>
                <p class="news-preview">${previewText}</p>
                <div class="news-meta">
                    <span class="news-author">${item.author.name}</span>
                </div>
            </div>
        `;
        
        newsItem.addEventListener('click', () => openModal(item));
        newsList.appendChild(newsItem);
    });
}

// 마크다운을 HTML로 변환하는 함수 (디스코드 스타일)
function markdownToHtml(text) {
    return text
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/`(.*?)`/gim, '<code>$1</code>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
        .replace(/->/gim, '→') // -> 를 → 로 변환
        .replace(/\n\n/gim, '<br>')
        .replace(/^(?!<[h|u|o|l])/gim, '<p>')
        .replace(/(?<!>)$/gim, '</p>')
        .replace(/<p><\/p>/gim, ''); // 빈 p 태그 제거
}

// 모달 열기 함수 (마크다운 변환 적용)
function openModal(item) {
    const modalTag = document.getElementById('modalTag');
    modalTag.textContent = item.tag;
    modalTag.style.backgroundColor = item.tagColor || 'rgba(74, 144, 226, 0.9)';
    
    // modalDate 요소가 존재하는 경우에만 설정
    const modalDate = document.getElementById('modalDate');
    if (modalDate) {
        modalDate.textContent = item.date;
    }
    
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalAuthorName').textContent = item.author.name;
    document.getElementById('modalAuthorRole').textContent = item.author.role;
    document.getElementById('modalAuthorImg').src = item.author.img;
    document.getElementById('modalImg').src = item.image;
    
    // 모달에서는 마크다운을 HTML로 변환하여 표시
    const modalText = document.getElementById('modalText');
    modalText.innerHTML = markdownToHtml(item.content);
    
    modalBg.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModalHandler() {
    modalBg.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 검색 기능
function searchNews() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNews = newsDataForPage.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm)
    );
    renderNews(filteredNews);
}

// 필터 기능
function filterNews() {
    const filterValue = filterSelect.value;
    let filteredNews = newsDataForPage;
    
    if (filterValue !== 'all') {
        filteredNews = newsDataForPage.filter(item => item.tag === filterValue);
    }
    
    renderNews(filteredNews);
}

// 이벤트 리스너
searchInput.addEventListener('input', searchNews);
filterSelect.addEventListener('change', filterNews);
closeModal.addEventListener('click', closeModalHandler);
modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) {
        closeModalHandler();
    }
});

// 초기 렌더링
renderNews();
