import { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/Theme"
import ThemeBtn from "./Compenets/ThemeBtn"
import Card from "./Compenets/Card"

function App() {


   // this project is not executing output due to tailwindcss all code is correct only tailwind.config file is misbehaving
  const [themeMode , setThemeMode] = useState('light')

  const lighttheme = () => {
    setThemeMode('light')
  }
  const darktheme = () => {
    setThemeMode('dark')
  }

  // actual theme switching
  useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])
  return (
    <ThemeProvider value={{darktheme , lighttheme , themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
           <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
