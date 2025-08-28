import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/lib/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation()

    const onToogleAuthModal = useCallback(() => {
        setIsAuthModal(!isAuthModal)
    }, [isAuthModal])



    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToogleAuthModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal 
                isOpen={isAuthModal}
                onClose={onToogleAuthModal}
            />
        </div>
    );
};
