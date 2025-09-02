import { classNames } from "shared/lib/classNames/classNames"
import stl from './ThemeSwitcher.module.scss'
import { Theme as THEME, useTheme } from "app/providers/ThemeProvider"
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme as ThemeButton } from "shared/ui/Button/Button"
import { memo } from "react"

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string
}


export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(stl.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'