import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import stl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}


export const Navbar = ({ className }: NavbarProps) => {


    return (
        <div className={classNames(stl.navbar, {}, [className])}>
            <ThemeSwitcher  />
            <div className={stl.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={stl.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
                    О нас
                </AppLink>
            </div>
        </div>
    )
}