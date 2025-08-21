import { FC, useMemo, useState } from "react"
import App from "../App"
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT

export const ThemeProvoder: FC = ({children}) => {

    const [theme, setTheme] = useState<THEME>(defaultTheme)

    const defaultProps = useMemo( () => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}