import { CSSProperties, ReactNode, createContext, useContext, useState } from 'react'

// normally this would be in a SEPERATE FILE
const ThemeContext = createContext(
  {
    darkTheme: true,
    toggleTheme: () => { null }
  }
)

const SeperateChild = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  )
}

const Child = () => {
  const { darkTheme } = useContext(ThemeContext)
  const themeStyles: CSSProperties = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <div style={themeStyles}>is dark theme ? {String(darkTheme)}</div>
  )
}

// THEN this would also be in a SEPERATE FILE
const ThemeProvider = ({children} : {children: ReactNode}) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true)

  const toggleTheme = () => setDarkTheme(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const Context = () => {
  return (
    <ThemeProvider>
      <Child />
      <SeperateChild/>
    </ThemeProvider>
  )
}

export default Context