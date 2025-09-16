import { useState } from 'react'
import './Portfolio.css'

// public 폴더 사용 - import 불필요

interface PortfolioItem {
  id: number
  title: string
  title2?: string
  description: string
  image: string
  video?: string
  type: 'image' | 'video'
  details: {
    technologies: string[]
    duration: string
    role: string
    summary: string
    link?: string
    notice?: string
  }
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [portfolioItems] = useState<PortfolioItem[]>([
    {
      id: 1,
      title: '내손으로 미래잡기',
      description: '한봄고 진로탐색 프로젝트 - UI/UX 디자인 및 프론트엔드 개발',
      image: '/images/hanbom/hanbom_web1.png',
      type: 'image',
      details: {
        technologies: ['React', 'TypeScript', 'CSS3'],
        duration: '2024.03 ~ 2024.12',
        role: '프론트엔드 개발',
        summary: '고등학생을 위한 진로 탐색 웹사이트를 제작했습니다. 사용자 친화적인 인터페이스와 반응형 디자인을 구현하여 다양한 디바이스에서 접근할 수 있도록 했습니다.',
        link: 'https://hanbom-project.com',
      }
    },
    {
      id: 2,
      title: '한봄 포털 - 로그인',
      description: '한봄고 진로탐색 프로젝트 - UI/UX 디자인 및 프론트엔드 개발',
      image: '/images/hanbom/hanbomweb_2.png',
      type: 'image',
      details: {
        technologies: ['React', 'TypeScript', 'CSS3'],
        duration: '2024.03 ~ 2024.12',
        role: '프론트엔드 개발',
        summary: '보안성을 고려하면서도 사용자 편의성을 높인 로그인 화면을 디자인했습니다. 생체인식과 소셜 로그인 옵션을 추가하여 접근성을 향상시켰습니다.',
        link: '/projects/login/login.html',
        notice:'• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.\n• 현재 데이토리,한봄고등학교 학생포털,내손의 미래잡기 프로젝트에서 사용되었습니다.'
      }
    },
    {
      id: 3,
      title: '경기창고 - 데이토리',
      description: '경기창고라는 직무 추천 서비스',
      image: '/images/hanbom/datory_web.png',
      type: 'image',
      details: {
        technologies: ['React', 'Node.js', 'MySQL'],
        duration: '2025',
        role: '백엔드 개발ㅣ프론트엔드 개발',
        summary: '직무 추천 서비스 웹사이트를 개발했습니다. 사용자 정보를 바탕으로 적합한 직무를 추천하는 시스템을 구현하고, 경기창고 대회에 참가했습니다.',
        link: 'https://youtu.be/mUoYUWkuaH4',
        notice:'• 현재 경진대회 진행 중으로 서버가 자주 변경되어 접속이 불안정하여 영상으로 대체 하였습니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    },

    {
      id: 4,
      title: '리라이프 - 게임 웹페이지 제작',
      description: '인생모드 서버 웹페이지 제작',
      image: '/images/design/relifewbe.png',
      type: 'image',
      details: {
        technologies: ['HTML/CSS'],
        duration: '2024.011.04',
        role: '프론트엔드 개발',
        summary: 'RELIFE 서버의 분위기와 테마에 맞는 웹사이트를 디자인했습니다. 다크 테마와 네온 효과를 활용하여 게임의 분위기를 웹사이트에 반영했습니다.',
        link: '/projects/relifewbe/index.html', 
        notice:'• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.\n• 이미지는 실제 홈페이지와 다를 수 있습니다. '
      }
    },

  ])

  const handleDetailClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const openProjectLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">개발 프로젝트</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-card">
                {item.type === 'video' && item.video ? (
                  <video 
                    src={item.video} 
                    className="portfolio-image"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                  />
                ) : (
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                )}
                <div className="portfolio-overlay">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  {item.type === 'video' && (
                    <span className="video-indicator">▶ 동영상</span>
                  )}
                  <button 
                    className="detail-btn"
                    onClick={() => handleDetailClick(item)}
                  >
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 상세 정보 모달 */}
      {isModalOpen && selectedItem && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedItem.title}</h2>
              {selectedItem.title2 && <h2>{selectedItem.title2}</h2>}
              <p className="modal-description">{selectedItem.description}</p>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">기간</span>
                    <span className="info-value">{selectedItem.details.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">역할</span>
                    <span className="info-value">{selectedItem.details.role}</span>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>사용 기술</h3>
                <div className="tech-tags">
                  {selectedItem.details.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>프로젝트 요약</h3>
                <p className="project-summary">{selectedItem.details.summary}</p>
              </div>

              {selectedItem.details.notice && (
                <div className="modal-section">
                  <div className="project-notice">
                    <h3>⚠️ 주의사항</h3>
                    <p className="notice-text">{selectedItem.details.notice}</p>
                  </div>
                </div>
              )}

              {selectedItem.details.link && (
                <div className="modal-section">
                  <button 
                    className="project-link-btn"
                    onClick={() => openProjectLink(selectedItem.details.link!)}
                  >
                    {selectedItem.title === '경기창고 - 데이토리' 
                      ? '프로젝트 보러가기 (경진대회 진행 중)' 
                      : selectedItem.title2 === '내손으로 미래잡기' 
                        ? '프로젝트 보러가기 (프로젝트 진행 중)' 
                        : '프로젝트 보러가기'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio