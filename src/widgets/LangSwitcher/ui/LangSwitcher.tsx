import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';
import stl from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={classNames(stl.LangSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
        </div>
    );
};