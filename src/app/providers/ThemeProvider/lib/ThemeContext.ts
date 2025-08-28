import { createContext } from "react";


export enum THEME {
    // eslint-disable-next-line no-unused-vars
    LIGHT = "app_light_theme",
    // eslint-disable-next-line no-unused-vars
    DARK = "app_dark_theme"
}

interface ThemeContextProps {
    theme: THEME
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: THEME) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: THEME.LIGHT
})


export const LOCAL_STORAGE_THEME_KEY = 'theme'