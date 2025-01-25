import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darktheme : () => {},
    lighttheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ //this is custom hook made by me not built-in
    return useContext(ThemeContext)
}