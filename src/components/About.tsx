import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">소개</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>학력</h3>
            <ul>
              <li>한봄고등학교 재학중 (2023.03 ~ 현재)</li>
              <li>서호중학교 졸업 (2020.01 ~ 2023.01)</li>
              <li>서호초등학교 졸업 (2016.12 ~ 2020.01)</li>
            </ul>
          </div>
          
          <div className="about-card">
            <h3>교육 및 활동</h3>
            <ul>
              <li>AWS Generative AI Essentials (2025.07.12)</li>
              <li>한봄고등학교 취업맞춤반 교육프로그램 (2025.07 ~ 08)</li>
              <li>경기창고 대회 참가 (2025)</li>
              <li>성균관대 SW 멘토링 프로그램 (2023.05 ~ 08)</li>
              <li>사이버 가디언즈 정보보안 교육 (2023.05 ~ 12)</li>
              <li>클라우드컴퓨팅전공심화 (2023.03 ~ 12)</li>
              <li>직업계고 도약캠프 (2023, 2025)</li>
              <li>달고나 고졸채용 박람회 참가 (2024.09)</li>
            </ul>
          </div>
          
          <div className="about-card">
            <h3>자격 및 수상</h3>
            <ul>
              <li>정보기기운용기능사 취득 (2025.07.18)</li>
              <li>태권도 4품 취득 (2011 ~ 2021)</li>
              <li>태권도 교범 인정 (2021.04)</li>
              <li>유니버셜 디자인공모대회 장려상 - 서호중학교 (2022.05)</li>
            </ul>
          </div>
          
          <div className="about-card">
            <h3>연락처</h3>
            <ul>
              <li>이메일: <a href="mailto:your-email@example.com">yk070201e@gmail.com</a></li>
              {/* <li>전화번호: <a href="tel:010-0000-0000">010-0000-0000</a></li> */}
              <li>인스타그램: <a href="https://instagram.com/yk._.070201e" target="_blank" rel="noopener noreferrer">@yk._.070201e</a></li>
              <li>깃허브: <a href="https://github.com/yk070201e" target="_blank" rel="noopener noreferrer">github.com/yk070201e</a></li>
              <li>디스코드: <span>yk._.070201e</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About