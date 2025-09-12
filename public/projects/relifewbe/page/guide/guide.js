// Guide Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Guide tab functionality
    const guideTabs = document.querySelectorAll('.guide-tab');
    const guideItems = document.querySelectorAll('.guide-item');

    guideTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all tabs
            guideTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Filter guide items
            guideItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'flex';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    // Animate in
                    setTimeout(() => {
                        item.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Guide button functionality
    const guideBtns = document.querySelectorAll('.guide-btn');
    
    guideBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const guideItem = this.closest('.guide-item');
            const guideTitle = guideItem.querySelector('.guide-title').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show guide content (placeholder)
            showGuideModal(guideTitle);
        });
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

    // Observe guide items for scroll reveal
    guideItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(item);
    });
});

// 가이드 데이터
const guideData = {
    '신규 플레이어 가이드': {
        content: `
            <h2>리라이프 기본 규칙</h2>
            <p>리라이프 서버에 처음 오신 분들을 위한 완전한 가이드입니다.</p>
            
            <h3>서버 접속 방법</h3>
            <ol>
                <li>FiveM을 실행합니다</li>
                <li>서버 주소를 입력합니다</li>
                <li>가이드 호출 및 교육에 따라 진행합니다.</li>
                <li>디스코드 인증후 즐겁게 인생모드를 즐겨주시면 됩니다.</li>
            </ol>
            
            <h3>기본 조작법</h3>
            <ul>
                <li><span class="key">E</span> - 상호작용 (차고,편의점,문열기 등등..)</li>
                <li><span class="key">Tap</span> - 확인/선택</li>
                <li><span class="key">ESC</span> - 취소/메뉴 닫기</li>
                <li><span class="key">↑</span> <span class="key">↓</span> <span class="key">←</span> <span class="key">→</span> - 메뉴 이동</li>
            </ul>
            
            <h3>Role Playing(RP)란</h3>
            <ul>
                <li>현실에서 할수 있는것을 의미합니다.</li>
                <li>캐릭터의 배경과 성격에 맞는 행동</li>
                <li>다른 플레이어 존중 및 예의</li>
                <li>게임 내 상황에 맞는 적절한 반응</li>
            </ul>

            <h3>Non-Role Playing(Non-RP)란</h3>
            <ul>
                <li>현실에서 하지 못하는 불가능한 것을 의미하는데요.</li>
                <li>캐릭터가 죽었을때 <span class="key">N</span>을 누르고 말하는 행위</li>
                <li>게임 내 상황과 맞지 않는 행동</li>
                <li>게임 내 불법 프로그램을 사용하는 행위</li>
            </ul>

            <h3>메타게이밍이란</h3>
            <ul>
                <li>게임 속의 세계에서 말을 하거나 행동이나 상태를 표현 할 때 자음이나 모음 또는 특수문자등을 사용하는 것 </li>
                <li><span class="key">T</span>를 눌러 일반채팅에 <span class="key">ㅋㅋ,ㅇㅇ,ㄴㄴ,ㄱㄱ,ㅄ</span> 등의 말을 표현하는 행위</li>
            </ul>

            <h3>파워게이밍이란</h3>
            <ul>
                <li>사람이 할 수 없는 비현실적인 행동 또는 상태를 명령어를 통해 표현하는 것</li>
                 <li><span class="key">T</span>를 눌러 <span class="key">TAP</span>행동 채팅방으로 변경후 <span class="key">나(행동) : 한 손으로 건물을 들어올린다.</span> 등의 말을 표현하는 행위</li>
            </ul>
            
            <div class="warning">
                <strong>주의:</strong> Bad RP, Non-RP, Meta Gaming, Power Gaming 은 금지됩니다.
            </div>
        `
    },
    '기본 조작법': {
        content: `
            <h2>기본 조작법</h2>
            <p>게임 내 모든 조작법과 단축키를 익혀보세요.</p>
            
            <h3>기본 조작</h3>
            <ul>
                <li><span class="key">E</span> - 상호작용 (차고, 병원, 정비소 등)</li>
                <li><span class="key">Enter</span> - 확인/선택</li>
                <li><span class="key">ESC</span> - 취소/메뉴 닫기</li>
                <li><span class="key">↑</span> <span class="key">↓</span> - 메뉴 이동 (위/아래)</li>
                <li><span class="key">←</span> <span class="key">→</span> - 메뉴 이동 (좌/우)</li>
            </ul>
            
            <h3>기능키</h3>
            <ul>
                <li><span class="key">F1</span> - 시민 신분 확인 (경찰)</li>
                <li><span class="key">F2</span> - 차량 검문 (경찰)</li>
                <li><span class="key">F9</span> - 긴급 지원 요청 (경찰)</li>
            </ul>
            
            <h3>복합 단축키</h3>
            <ul>
                <li><span class="key">Ctrl</span> + <span class="key">T</span> - 무전 통신 (경찰)</li>
            </ul>
            
            <h3>채팅 명령어</h3>
            <ul>
                <li><span class="command">/help</span> - 도움말 표시</li>
                <li><span class="command">@</span> - 플레이어 멘션</li>
            </ul>
        `
    },
    '직업 선택 가이드': {
        content: `
            <h2>직업 선택 가이드</h2>
            <p>다양한 직업의 특징과 역할을 알아보세요.</p>
            
            <h3>경찰</h3>
            <ul>
                <li><strong>역할:</strong> 도시의 안전을 지키는 중요한 직업</li>
                <li><strong>주요 업무:</strong> 범죄 예방 및 단속, 교통 관리, 시민 보호, 사건 수사</li>
                <li><strong>단축키:</strong> F1(신분확인), F2(차량검문), Ctrl+T(무전), F9(긴급지원)</li>
                <li><strong>지원 방법:</strong> 경찰서에서 E키를 눌러 지원서 작성</li>
            </ul>
            
            <h3>의사</h3>
            <ul>
                <li><strong>역할:</strong> 사람들의 건강을 돌보는 고귀한 직업</li>
                <li><strong>주요 업무:</strong> 환자 진료, 수술 수행, 응급처치, 건강 상담</li>
                <li><strong>자격 요건:</strong> 의료 교육 및 의사 자격증 필요</li>
            </ul>
            
            <h3>정비사</h3>
            <ul>
                <li><strong>역할:</strong> 차량과 기계를 수리하고 관리하는 전문가</li>
                <li><strong>주요 업무:</strong> 차량 수리, 정기 점검, 부품 교체, 성능 개선</li>
                <li><strong>자격 요건:</strong> 기계 공학 지식과 실무 경험 필요</li>
            </ul>
            
            <h3>사업가</h3>
            <ul>
                <li><strong>역할:</strong> 자신의 사업을 운영하며 경제 활동을 하는 사람</li>
                <li><strong>주요 업무:</strong> 사업 기획, 자금 관리, 직원 관리, 마케팅</li>
                <li><strong>시작 방법:</strong> 사업 아이디어 구상 후 자본 확보 및 사업 등록</li>
            </ul>
        `
    },
    '경제 시스템': {
        content: `
            <h2>경제 시스템</h2>
            <p>돈을 벌고 사용하는 방법을 알아보세요.</p>
            
            <h3>수입원</h3>
            <ul>
                <li><strong>직업 활동:</strong> 정기적인 급여와 보너스</li>
                <li><strong>부업:</strong> 추가 수입을 위한 일시적 작업</li>
                <li><strong>투자:</strong> 부동산, 주식 등의 투자를 통한 수익</li>
                <li><strong>사업:</strong> 개인 사업을 통한 수익 창출</li>
            </ul>
            
            <h3>지출 관리</h3>
            <ul>
                <li><strong>주거비:</strong> 아파트, 단독주택, 원룸, 기숙사</li>
                <li><strong>교통비:</strong> 버스, 지하철, 택시, 개인 차량</li>
                <li><strong>생활비:</strong> 식비, 의료비, 통신비 등</li>
                <li><strong>여가비:</strong> 엔터테인먼트, 취미 활동</li>
            </ul>
            
            <h3>은행 시스템</h3>
            <ul>
                <li><strong>계좌 개설:</strong> 신분증 지참 후 은행 방문</li>
                <li><strong>입출금:</strong> 현금과 계좌 간 자유로운 이동</li>
                <li><strong>송금:</strong> 다른 플레이어에게 돈 전송</li>
                <li><strong>대출:</strong> 필요시 은행에서 대출 가능</li>
            </ul>
            
            <div class="tip">
                <strong>팁:</strong> 가계부를 작성하여 수입과 지출을 관리하고 불필요한 지출을 줄이세요.
            </div>
        `
    },
    '커뮤니티 가이드': {
        content: `
            <h2>커뮤니티 가이드</h2>
            <p>다른 플레이어들과 소통하는 방법을 알아보세요.</p>
            
            <h3>인맥 관리</h3>
            <ul>
                <li><strong>동료와의 관계:</strong> 직장 동료들과의 협력</li>
                <li><strong>이웃과의 관계:</strong> 주거 지역 주민들과의 교류</li>
                <li><strong>상사와의 관계:</strong> 직장 상급자들과의 관계</li>
                <li><strong>고객과의 관계:</strong> 비즈니스 관계에서의 소통</li>
            </ul>
            
            <h3>소통 방법</h3>
            <ul>
                <li>정중하고 예의 바른 태도로 대화</li>
                <li>상대방의 입장을 이해하려 노력</li>
                <li>적절한 거리감 유지</li>
                <li>갈등 상황에서의 건설적 해결</li>
            </ul>
            
            <h3>채팅 기능</h3>
            <ul>
                <li><span class="command">/help</span> - 도움말 확인</li>
                <li><span class="command">@플레이어명</span> - 멘션 기능</li>
                <li><span class="emoji">:)</span> <span class="emoji">:(</span> <span class="emoji">:D</span> - 이모지 사용</li>
                <li><span class="symbol">##</span> - 헤딩 생성</li>
            </ul>
            
            <h3>특수 문자</h3>
            <ul>
                <li><strong>화살표:</strong> → ← ↑ ↓</li>
                <li><strong>수학 기호:</strong> + - × ÷</li>
                <li><strong>특수 기호:</strong> ★ ● ▲ ■</li>
            </ul>
        `
    },
    '문제 해결': {
        content: `
            <h2>문제 해결</h2>
            <p>자주 발생하는 문제들과 해결 방법을 확인하세요.</p>
            
            <h3>FiveM이 로딩에서 넘어가지 않음</h3>
            <p>FiveM이 시작 직후 로딩에 멈춰있다면 시도해보세요:</p>
            <ol>
                <li>Windows + R → cmd 실행</li>
                <li><span class="command">netsh int ip set global mldlevel=all</span> 명령어 실행</li>
                <li>FiveM 재시작</li>
            </ol>
            
            <h3>NVIDIA Game Filter 사용 해제</h3>
            <p>다음 상황에서 시도해보세요:</p>
            <ul>
                <li>FiveM이 시작 직후에 바로 꺼지는 경우</li>
                <li>업데이트 단계에서 멈춰있는 경우</li>
            </ul>
            <p><strong>해결 방법:</strong> NVIDIA Game Filter가 FiveM에서 문제를 일으킬 수 있으므로 GeForce Experience가 아닌 NVIDIA 앱에서 해제하세요.</p>
            
            <h3>The Social Club account specified...</h3>
            <p>이 메시지가 표시되면:</p>
            <ul>
                <li>GTA V를 한번 실행하고 다시 시도</li>
                <li>Rockstar 계정을 변경했다면 게임을 다시 구매해야 함</li>
            </ul>
            
            <h3>Banned from FiveM</h3>
            <p>서버에 접속할 때 "The Rockstar Account has been banned..." 메시지가 표시되면:</p>
            <ul>
                <li>이 차단은 리라이프에서 한 것이 아님</li>
                <li>FiveM 자체 안티치트가 비정상적인 행동을 감지한 것</li>
                <li>항소는 <a href="https://support.cfx.re/hc/en-us/requests/new?ticket_form_id=1900000367054" target="_blank">여기</a>에서 가능</li>
            </ul>
            
            <div class="contact">
                <h3>추가 도움</h3>
                <ul>
                    <li><a href="https://discord.gg/relife" target="_blank">공식 디스코드</a> - 실시간 문의 및 소통</li>
                    <li><a href="https://relife.kr" target="_blank">공식 웹사이트</a> - 서버 정보 및 공지사항</li>
                </ul>
            </div>
        `
    }
};

// Guide modal function
function showGuideModal(title) {
    const guideContent = guideData[title] ? guideData[title].content : `
        <h2>${title}</h2>
        <p>이 가이드는 현재 개발 중입니다. 곧 상세한 내용을 제공할 예정입니다.</p>
    `;

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'guide-modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'guide-modal-content';
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.95));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 40px;
        max-width: 800px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        backdrop-filter: blur(20px);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        color: #fff;
        line-height: 1.6;
    `;

    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
            <h2 style="color: #fff; font-size: 1.8rem; font-weight: 600; margin: 0;">${title}</h2>
            <button class="modal-close-btn" style="
                background: none;
                border: none;
                color: #ccc;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 5px;
                transition: color 0.3s ease;
            ">×</button>
        </div>
        <div class="guide-content">
            ${guideContent}
        </div>
    `;

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    // Close modal functionality
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    };

    // Close button
    modalContent.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    
    // Click outside to close
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // ESC key to close
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}
