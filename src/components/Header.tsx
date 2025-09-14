import { useState, useEffect, useRef } from 'react'
import './Header.css'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  
  const getTextByScreenSize = () => {
    if (screenSize.width >= 3440) {
      return '안녕하세요! 윤기의 포트폴리오 사이트에 오신 것을 환영합니다.'
    } else if (screenSize.width >= 2560) {
      return '안녕하세요 윤기의 포트폴리오 사이트에 오신 것을 환영합니다.'
    } else if (screenSize.width >= 1920 && screenSize.height >= 1080) {
      return '안녕하세요 윤기의 포트폴리오 사이트입니다.'
    } else if (screenSize.width >= 1366) {
      return '안녕하세요 윤기의 포트폴리오 사이트입니다'
    } else if (screenSize.width >= 768) {
      return '윤기의 포트폴리오 사이트입니다'
    } else {
      return '윤기의 포트폴리오'
    }
  }

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', updateScreenSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.5 // 50% 이상 보일 때 트리거
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  // 텍스트 애니메이션 실행
  useEffect(() => {
    if (!isVisible) {
      setDisplayText('')
      setShowSubtitle(false)
      return
    }

    const fullText = getTextByScreenSize()
    setDisplayText('')
    setShowSubtitle(false)
    
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowSubtitle(true), 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [isVisible, screenSize])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/images/2b364d9b85fc1cadba2f7ddd3db54791-removebg-preview.png" alt="Logo" />
            <span>윤기의 포트폴리오</span>
          </div>
          <div className="nav-menu">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>홈</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>프로젝트</a>
            <a href="#video" onClick={(e) => { e.preventDefault(); scrollToSection('video'); }}>영상</a>
            <a href="#design" onClick={(e) => { e.preventDefault(); scrollToSection('design'); }}>디자인</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>소개</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <p className={`hero-subtitle ${showSubtitle ? 'show' : ''}`}>
            저는 단순한 기능 구현을 넘어, 사용자에게 좋은 느낌(Vibe)을 주는 UI/UX 중심의 코딩을 지향합니다.
          </p>
        </div>
      </section>
    </>
  )
}

export default Header