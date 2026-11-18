import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => localStorage.getItem('polleria-theme') === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('polleria-theme', theme)
  }, [theme])

  return <button className="icon-button theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'} title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button>
}
