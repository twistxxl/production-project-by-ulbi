import { FC, useMemo, useState } from "react"
import { 
    LOCAL_STORAGE_THEME_KEY, 
    THEME, 
    ThemeContext 
    
} from "app/providers/ThemeProvider/lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT

interface ThemeProvoderProps {
    initialTheme?: THEME
}

export const ThemeProvoder: FC<ThemeProvoderProps> = ({children, initialTheme}) => {

    const [theme, setTheme] = useState<THEME>(initialTheme || defaultTheme)

    const defaultProps = useMemo( () => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps} >
            {children}
        </ThemeContext.Provider>
    )
}