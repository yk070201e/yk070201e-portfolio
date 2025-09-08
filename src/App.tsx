import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Video from './components/Video'
import Design from './components/Design'
import About from './components/About'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light'
  }, [isDark])

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <ThemeToggle onThemeChange={setIsDark} />
      <Header />
      <Portfolio />
      <Video />
      <Design />
      <About />
    </div>
  )
}

export default App