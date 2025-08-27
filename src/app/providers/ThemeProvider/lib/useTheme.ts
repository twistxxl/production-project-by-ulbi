import { useContext, useEffect } from "react"
import { 
    LOCAL_STORAGE_THEME_KEY, 
    THEME, 
    ThemeContext 
    
} from "app/providers/ThemeProvider/lib/ThemeContext"


interface UseThemeResult {
    toggleTheme: () => void
    theme: THEME
}


export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        setTheme(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    useEffect(() => {
        const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME
        document.body.className = localStorageTheme
        setTheme(localStorageTheme)
    }, [setTheme])
    return {
        theme,
        toggleTheme
    }

   
}