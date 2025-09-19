import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme as ThemeButton } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    const localStorageLang = localStorage.getItem('i18nextLng');
    const langSidebar = () => {
        let version: string = '';

        if (!short && localStorageLang === 'ru') {
            version = 'Русский';
        } else if (!short && localStorageLang === 'en') {
            version = 'English';
        } else if (short && localStorageLang === 'ru') {
            version = 'РУ';
        } else if (short && localStorageLang === 'en') {
            version = 'EN';
        }

        return version;
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t(langSidebar())}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
