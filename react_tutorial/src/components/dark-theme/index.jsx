import React from 'react'
import LocalStorage from './useLocalStorage'

const LightDarkMode = () => {
    const [theme, setTheme] = LocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme)
  return (
    <div className='light-dark-mode'>
        <div className='container'>
        <p>Dark & Light Theme</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDarkMode