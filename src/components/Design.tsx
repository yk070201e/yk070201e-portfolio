import { useState } from 'react'
import './Design.css'

interface DesignItem {
  id: number
  title: string
  description: string
  image: string
  category: string
  details: {
    tools: string[]
    duration: string
    purpose: string
    summary: string
    link?: string
    notice?: string
  }
}

const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [designItems] = useState<DesignItem[]>([
    {
      id: 1,
      title: '한봄 포털 - 회원가입',
      description: '한봄고등학교 포털 앱 회원가입 화면 UI/UX',
      image: '/images/hanbom/hanbomweb.png',
      category: 'UI/UX',
      details: {
        tools: ['Adobe XD', 'Photoshop'],
        duration: '2024.01 ~ 2024.02',
        purpose: '학생들이 쉽게 회원가입할 수 있는 직관적인 인터페이스',
        summary: '고등학생을 대상으로 한 포털 앱의 회원가입 화면을 디자인했습니다. 복잡한 절차를 단순화하고 사용자 친화적인 UI/UX를 구현하여 가입률을 높였습니다.',
        link: '/images/hanbom/hanbomweb.png'
      }
    },
    {
      id: 2,
      title: '한봄 포털 - 로그인',
      description: '한봄고등학교 포털 앱 로그인 화면 UI/UX',
      image: '/images/hanbom/hanbomweb_2.png',
      category: 'UI/UX',
      details: {
        tools: ['Adobe XD', 'Photoshop','TSX/JS','HTML/CSS'],
        duration: '2024.01 ~ 2024.02',
        purpose: '빠르고 안전한 로그인 경험 제공',
        summary: '보안성을 고려하면서도 사용자 편의성을 높인 로그인 화면을 디자인했습니다. 생체인식과 소셜 로그인 옵션을 추가하여 접근성을 향상시켰습니다.',
        link: '/projects/login/login.html',
        notice: '• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.\n• 현재 데이토리,한봄고등학교 학생포털,내손의 미래잡기 프로젝트에서 사용되었습니다.'
      }
    },
    {
      id: 3,
      title: '한봄 포털 - 이용약관',
      description: '한봄고등학교 포털 앱 서비스 이용약관 UI/UX',
      image: '/images/hanbom/hanbomweb_1.png',
      category: 'UI/UX',
      details: {
        tools: ['Adobe XD', 'Photoshop'],
        duration: '2024.01 ~ 2024.02',
        purpose: '복잡한 약관을 읽기 쉽게 구성',
        summary: '법적 요구사항을 충족하면서도 사용자가 쉽게 이해할 수 있는 이용약관 화면을 디자인했습니다. 체크박스와 단계별 안내로 가독성을 높였습니다.',
        link: '/images/hanbom/hanbomweb_1.png'
      }
    },
    {
      id: 4,
      title: 'FIVEM 리버티시티 - 캐릭터 커스텀 인터페이스',
      description: '캐릭터 커스텀 기능의 사용자 인터페이스',
      image: '/images/fivem/inventorypng.png',
      category: 'UI/UX',
      details: {
        tools: ['Photoshop', 'Adobe XD', 'FIVEM UI'],
        duration: '2024.03 ~ 2024.04',
        purpose: '게임 내 캐릭터 커스터마이징 경험 향상',
        summary: 'FIVEM 서버에서 사용할 캐릭터 커스텀 인터페이스를 디자인했습니다. 직관적인 아이콘과 명확한 카테고리 분류로 사용자가 쉽게 원하는 스타일을 적용할 수 있도록 했습니다.',
        link: '/images/fivem/inventorypng.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• UI/UX로만 제작되었습니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.'
      }
    },
    {
      id: 5,
      title: 'FIVEM 리버티시티 - 인벤토리 시스템 UI',
      description: '게임 내 아이템 관리를 위한 인벤토리 인터페이스',
      image: '/images/fivem/inventorypng2.png',
      category: 'UI/UX',
      details: {
        tools: ['Photoshop', 'Adobe XD', 'FIVEM UI'],
        duration: '2024.03 ~ 2024.04',
        purpose: '효율적인 아이템 관리 시스템',
        summary: '게임 플레이 중에도 쉽게 아이템을 관리할 수 있는 인벤토리 시스템을 디자인했습니다. 드래그 앤 드롭과 퀵 액션 버튼으로 사용성을 극대화했습니다.',
        link: '/images/fivem/inventorypng2.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• UI/UX로만 제작되었습니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.'
      }
    },
    {
      id: 6,
      title: 'FIVEM 리버티시티 - 메인 UI 인터페이스',
      description: '게임 메인 화면 및 HUD 시스템 UI 디자인',
      image: '/images/fivem/candymanui.png',
      category: 'UI/UX',
      details: {
        tools: ['Photoshop', 'Illustrator', 'FIVEM UI'],
        duration: '2024.03 ~ 2024.04',
        purpose: '게임 플레이에 방해되지 않는 HUD 디자인',
        summary: '게임의 몰입감을 해치지 않으면서도 필요한 정보를 명확하게 전달하는 HUD 시스템을 디자인했습니다. 투명도와 위치를 최적화하여 시각적 방해를 최소화했습니다.',
        link: '/images/fivem/candymanui.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• UI/UX로만 제작되었습니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.'
      }
    },
    {
      id: 7,
      title: 'FIVEM - RELIFE 서버 웹사이트',
      description: '게임 분위기에 맞춘 서버 메인페이지 UI 디자인',
      image: '/images/design/relifewbe.png',
      category: 'Web Design',
      details: {
        tools: ['Adobe XD', 'HTML/CSS'],
        duration: '2024.05 ~ 2024.06',
        purpose: '게임 서버의 브랜드 아이덴티티 강화',
        summary: 'RELIFE 서버의 분위기와 테마에 맞는 웹사이트를 디자인했습니다. 다크 테마와 네온 효과를 활용하여 게임의 분위기를 웹사이트에 반영했습니다.',
        link: '/images/fivem/candymanui.png'
      }
    }, 
    {
      id: 8,
      title: '포토이즘 리디자인',
      description: '연예인 콘셉트 사진 재구성 및 감성적 리디자인 프로젝트',
      image: '/images/design/photoismpng.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2024.06 ~ 2024.07',
        purpose: '기존 콘셉트의 감성적 재해석',
        summary: '기존 연예인 콘셉트 사진을 참고하여 새로운 감성으로 리디자인했습니다. 색감과 구도를 재구성하여 독창적인 결과물을 만들어냈습니다.',
        link: '/images/design/photoismpng.png'
      }
    },
    {
      id: 9,
      title: 'iOS 합불 메시지',
      description: '아이폰 메시지 스타일 합격/불합격 알림 UI (외주)',
      image: '/images/design/ios.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop', 'iOS Design Guidelines'],
        duration: '2024.07 ~ 2024.08',
        purpose: 'iOS 네이티브 앱과 일치하는 디자인',
        summary: 'iOS의 디자인 가이드라인을 준수하여 메시지 앱과 동일한 스타일의 합격/불합격 알림을 디자인했습니다. 사용자에게 친숙한 인터페이스를 제공합니다.',
        link: '/images/design/ios.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• Adobe Photoshop로만 제작되었습니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.'
      }
    },
    {
      id: 10,
      title: '게임 로고 심플 로고 디자인',
      description: '게임 및 브랜드 로고 디자인 제작',
      image: '/images/design/제목 없음-1.png',
      category: 'Design',
      details: {
        tools: ['Adobe Illustrator', 'Adobe Photoshop'],
        duration: '2024.08 ~ 2024.09',
        purpose: '기억에 남는 심플한 로고 디자인',
        summary: '게임과 브랜드를 위한 심플하면서도 강력한 로고를 디자인했습니다. 최소한의 요소로 최대한의 임팩트를 전달하는 것을 목표로 했습니다.',
        link: '/images/design/제목 없음-1.png'
      }
    },
    {
      id: 11,
      title: '디스코드 홍보 배너 디자인',
      description: '차량 거래 서비스 홍보 배너 디자인',
      image: '/images/design/carpng.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2024.09 ~ 2024.10',
        purpose: '디스코드 채널 홍보를 위한 시선을 끄는 배너',
        summary: '디스코드 채널에서 사용할 차량 거래 서비스 홍보 배너를 디자인했습니다. 밝고 생동감 있는 색상과 명확한 메시지 전달을 중점으로 했습니다.',
        link: '/images/design/carpng.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.'
      }
    },
    {
      id: 12,
      title: '디스코드 뉴비 인증',
      description: '디스코드 인증 과정 단계별 가이드 이미지',
      image: '/images/design/discord.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Discord Guidelines'],
        duration: '2024.10 ~ 2024.11',
        purpose: '신규 사용자의 쉬운 서버 인증',
        summary: '디스코드 서버에 처음 입장하는 사용자를 위한 단계별 인증 가이드 이미지를 제작했습니다. 복잡한 과정을 시각적으로 단순화했습니다.',
        link: '/images/design/discord.png',
        notice: '• 외주 작업으로 제작된 프로젝트입니다.\n• 모든 저작권은 클라이언트에 있습니다.\n• 무단 복제 및 배포를 금지합니다.',
      }
    }, 
    {
      id: 13,
      title: '한봄고등학교 한마음제 포스터',
      description: '학생자치회 한마음제 행사 홍보 포스터',
      image: '/images/hanbom/hanbomgin.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2024.11 ~ 2024.12',
        purpose: '학교 행사 홍보 및 참여율 증대',
        link: '/images/hanbom/hanbomgin.png',
        summary: '한봄고등학교 한마음제 행사를 위한 홍보 포스터를 디자인했습니다. 학생들의 관심을 끌 수 있는 밝고 활기찬 디자인으로 참여율을 높였습니다.',
        notice: '• 최적화된 화질로 표시되며, 원본 이미지의 비율을 유지합니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    },  
    {
      id: 14,
      title: '앨범 커버 아트 리디자인',
      description: '기존 앨범아트를 참고한 그래픽 디자인 연습 프로젝트',
      image: '/images/design/123.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2024.12 ~ 2025.01',
        purpose: '그래픽 디자인 기술 향상 및 포트폴리오 확장',
        summary: '기존 앨범아트를 참고하여 새로운 그래픽 디자인을 제작했습니다. 색상 이론과 레이아웃 구성에 대한 이해를 높이는 연습 프로젝트였습니다.',
        link: '/images/design/123.png',
        notice: '• 최적화된 화질로 표시되며, 원본 이미지의 비율을 유지합니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    }, 
    {
      id: 15,
      title: 'FIVEM - 치즈서버 직업 가이드',
      description: '인생모드 택비공이라는 직업 가이드',
      image: '/images/fivem/fixjob.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2025.01 ~ 2025.02',
        purpose: '게임 내 직업 시스템 이해도 향상',
        summary: 'FIVEM 치즈서버의 직업 시스템을 시각적으로 설명하는 가이드 이미지를 제작했습니다. 복잡한 게임 메커니즘을 쉽게 이해할 수 있도록 했습니다.',
        link: '/images/fivem/fixjob.png',
        notice: '• 최적화된 화질로 표시되며, 원본 이미지의 비율을 유지합니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    },
    {
      id: 16,
      title: 'FIVEM - 치즈서버 이벤트',
      description: '인생모드 오픈이벤트 홍보 포스터',
      image: '/images/fivem/cheeseevent.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop'],
        duration: '2025.01 ~ 2025.02',
        purpose: '서버 이벤트 참여율 증대',
        summary: 'FIVEM 치즈서버의 오픈이벤트를 홍보하는 포스터를 디자인했습니다. 게임의 분위기와 어울리는 다크 테마와 네온 효과를 활용했습니다.',
        link: '/images/fivem/cheeseevent.png',  
        notice: '• 최적화된 화질로 표시되며, 원본 이미지의 비율을 유지합니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    }, 
    {
      id: 17,
      title: 'FIVEM 치즈서버 - 복권 스크립트',
      description: '인생모드 서버 복권 스크립트 제작',
      image: '/images/fivem/lotto.png',
      category: 'Design',
      details: {
        tools: ['Adobe Photoshop', 'FIVEM UI','Lua'],
        duration: '2025.01.08',
        purpose: '게임 시스템 개발',
        summary: 'FIVEM 서버용 복권 시스템을 개발했습니다. 데이터베이스 연동과 확률 계산 로직을 구현하여 안정적인 게임 시스템을 만들었습니다.',
        link: 'https://youtu.be/4F8rYtSIXmo', 
        notice: '• 해당 프로젝트는 영상으로 제생이 됩니다.\n• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    },
    {
      id: 18,
      title: 'FIVEM 치즈서버 - 신분배달 UI',
      description: '인생모드 서버 신분배달 UI 제작',
      image: '/images/fivem/lotto.png',
      category: 'UI/UX',
      details: {
        tools: ['UI/UX','Adobe XD', 'FIVEM UI','Lua'],
        duration: '2024.011.04',
        purpose: '신분 배달 미션창',
        summary: 'FIVEM 서버용 복권 시스템을 개발했습니다. 데이터베이스 연동과 확률 계산 로직을 구현하여 안정적인 게임 시스템을 만들었습니다.',
        link: '/projects/newspaper/mission.html', 
        notice:'• 프로젝트 보러가기를 클릭할 경우 다른 페이지로 넘어가게 됩니다.'
      }
    },  
  ])

  const handleDesignClick = (item: DesignItem) => {
    setSelectedDesign(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedDesign(null)
  }

  const openProjectLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="design">
      <div className="design-container">
        <h2 className="design-title">디자인 작업</h2>
        <div className="design-grid">
          {designItems.map((item) => (
            <div 
              key={item.id} 
              className="design-item"
              onClick={() => handleDesignClick(item)}
            >
              <div className="design-card">
                <img src={item.image} alt={item.title} className="design-image" />
                <div className="design-overlay">
                  <span 
                    className="design-category"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.category}
                  </span>
                  <h3 className="design-item-title">{item.title}</h3>
                  <p className="design-description">{item.description}</p>
                  <button 
                    className="detail-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDesignClick(item);
                    }}
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
      {isModalOpen && selectedDesign && (
        <div className="design-modal-overlay" onClick={closeModal}>
          <div className="design-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedDesign.title}</h2>
              <p className="modal-description">{selectedDesign.description}</p>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">카테고리</span>
                    <span className="info-value">{selectedDesign.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">기간</span>
                    <span className="info-value">{selectedDesign.details.duration}</span>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>사용 도구</h3>
                <div className="tool-tags">
                  {selectedDesign.details.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>디자인 목적</h3>
                <p className="design-purpose">{selectedDesign.details.purpose}</p>
              </div>

              <div className="modal-section">
                <h3>프로젝트 요약</h3>
                <p className="design-summary">{selectedDesign.details.summary}</p>
              </div>

              {selectedDesign.details.notice && (
                <div className="modal-section">
                  <div className="project-notice">
                    <h3>⚠️ 주의사항</h3>
                    <p className="notice-text">{selectedDesign.details.notice}</p>
                  </div>
                </div>
              )}

              {selectedDesign.details.link && (
                <div className="modal-section">
                  <button 
                    className="project-link-btn"
                    onClick={() => openProjectLink(selectedDesign.details.link!)}
                  >
                    프로젝트 보러가기
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

export default Design