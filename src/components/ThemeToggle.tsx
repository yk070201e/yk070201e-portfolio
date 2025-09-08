import { useState, useEffect } from 'react'
import './ThemeToggle.css'

interface ThemeToggleProps {
  onThemeChange: (isDark: boolean) => void
}

const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark'
    setIsDark(prefersDark)
    onThemeChange(prefersDark)
  }, [onThemeChange])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    onThemeChange(newTheme)
  }

  return (
    <div className="theme-toggle-container">
      <button className={`theme-toggle ${isDark ? 'night' : 'day'}`} onClick={toggleTheme}>
        <div className="toggle-track">
          {/* 배경 아이콘 - 모드에 따라 하나만 보이게 */}
          <div className="background-icons">
            {isDark ? (
              <div className="bg-icon left-bg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C12 2 12 6 12 8C12 10 12 14 12 16C12 18 12 22 12 22" stroke="#000" strokeWidth="2" fill="none"/>
                  <path d="M12 2C12 2 8 6 6 8C4 10 0 14 0 16C0 18 4 22 6 22" stroke="#000" strokeWidth="2" fill="none"/>
                  <path d="M12 2C12 2 16 6 18 8C20 10 24 14 24 16C24 18 20 22 18 22" stroke="#000" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            ) : (
              <div className="bg-icon right-bg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="6" fill="#FFD700"/>
                  <path d="M12 2V4" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M12 20V22" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M2 12H4" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M20 12H22" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M4.93 4.93L6.34 6.34" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M17.66 17.66L19.07 19.07" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M19.07 4.93L17.66 6.34" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M6.34 17.66L4.93 19.07" stroke="#FFD700" strokeWidth="2"/>
                </svg>
              </div>
            )}
          </div>
          {/* 슬라이더 */}
          <div className={`toggle-slider ${isDark ? 'slide-left' : 'slide-right'}`}>
            {isDark ? (
              // NIGHT 모드 슬라이더: 초승달
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 12 6 12 8C12 10 12 14 12 16C12 18 12 22 12 22" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M12 2C12 2 8 6 6 8C4 10 0 14 0 16C0 18 4 22 6 22" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M12 2C12 2 16 6 18 8C20 10 24 14 24 16C24 18 20 22 18 22" stroke="#000" strokeWidth="2" fill="none"/>
              </svg>
            ) : (
              // DAY 모드 슬라이더: 태양
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="6" fill="#FFD700"/>
                <path d="M12 2V4" stroke="#FFD700" strokeWidth="2"/>
                <path d="M12 20V22" stroke="#FFD700" strokeWidth="2"/>
                <path d="M2 12H4" stroke="#FFD700" strokeWidth="2"/>
                <path d="M20 12H22" stroke="#FFD700" strokeWidth="2"/>
                <path d="M4.93 4.93L6.34 6.34" stroke="#FFD700" strokeWidth="2"/>
                <path d="M17.66 17.66L19.07 19.07" stroke="#FFD700" strokeWidth="2"/>
                <path d="M19.07 4.93L17.66 6.34" stroke="#FFD700" strokeWidth="2"/>
                <path d="M6.34 17.66L4.93 19.07" stroke="#FFD700" strokeWidth="2"/>
              </svg>
            )}
          </div>
        </div>
        {/* 텍스트 */}
        <span className="toggle-text">
          {isDark ? 'NIGHT' : 'DAY'}
        </span>
      </button>
    </div>
  )
}

export default ThemeToggle