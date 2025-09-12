import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        {/* Hero Section */}
        <div className="about-hero">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/images/2b364d9b85fc1cadba2f7ddd3db54791-removebg-preview.png" alt="윤기 프로필" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">윤기</h3>
              <p className="profile-title">UI/UX Developer & Designer</p>
              <p className="profile-description">
                단순한 기능 구현을 넘어, 사용자에게 좋은 느낌(Vibe)을 주는 UI/UX 중심의 코딩을 지향합니다. 
                창의적인 아이디어와 기술적 실력을 바탕으로 의미 있는 디지털 경험을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>


        {/* Experience & Tools Section */}
        <div className="experience-tools-section">
          <div className="experience-section">
            <h3 className="experience-title">Experience & Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>한봄고등학교 재학중</h4>
                  <p className="timeline-period">2023.03 ~ 현재</p>
                  <p className="timeline-description">클라우드컴퓨팅전공심화 과정 수료</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>정보기기운용기능사 취득</h4>
                  <p className="timeline-period">2025.07.18</p>
                  <p className="timeline-description">국가기술자격증 취득</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>경기창고 대회 참가</h4>
                  <p className="timeline-period">2025</p>
                  <p className="timeline-description">직무 추천 서비스 개발 프로젝트</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>성균관대 SW 멘토링</h4>
                  <p className="timeline-period">2023.05 ~ 08</p>
                  <p className="timeline-description">소프트웨어 개발 멘토링 프로그램 참여</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h3 className="tools-title">Tools</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Frontend</h4>
                  <p className="timeline-period">Development</p>
                  <p className="timeline-description">React, TypeScript, HTML/CSS, JavaScript</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Design</h4>
                  <p className="timeline-period">Creative</p>
                  <p className="timeline-description">Adobe XD, Photoshop, Illustrator</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Game Development</h4>
                  <p className="timeline-period">Specialized</p>
                  <p className="timeline-description">FIVEM UI, Lua Scripting</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Backend & Cloud</h4>
                  <p className="timeline-period">Infrastructure</p>
                  <p className="timeline-description">AWS, MySQL, Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3 className="contact-title">Let's Connect</h3>
          <div className="contact-grid">
            <a href="mailto:yk070201e@gmail.com" className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>yk070201e@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/yk070201e" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>github.com/yk070201e</p>
              </div>
            </a>
            <a href="https://instagram.com/yk._.070201e" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">📷</div>
              <div className="contact-info">
                <h4>Instagram</h4>
                <p>@yk._.070201e</p>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div className="contact-info">
                <h4>Discord</h4>
                <p>yk._.070201e</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About