import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/lib/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation()

    const onToogleModal = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])



    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToogleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToogleModal}/>
        </div>
    );
};
