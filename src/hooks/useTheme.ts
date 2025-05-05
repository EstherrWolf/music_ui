import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const isNowDark = e.newValue === 'dark'
        setIsDark(isNowDark)
        document.documentElement.classList.toggle('dark', isNowDark)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newDark = !prev
      localStorage.setItem('theme', newDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', newDark)
      return newDark
    })
  }

  return { isDark, toggleTheme }
}
