import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    const newTheme = darkMode ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {darkMode ? '🌙' : '🌞'}
    </button>
  )
}

export default ThemeToggle
