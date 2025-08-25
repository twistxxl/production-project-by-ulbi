import { classNames } from "shared/lib/classNames/classNames"
import stl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}


export const Navbar = ({ className }: NavbarProps) => {

    const { t } = useTranslation()

    return (
        <div className={classNames(stl.navbar, {}, [className])}>
            <div className={stl.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={stl.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    )
}