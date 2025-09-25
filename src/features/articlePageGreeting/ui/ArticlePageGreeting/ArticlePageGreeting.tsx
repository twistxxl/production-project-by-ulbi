import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import cls from './ArticlePageGreeting.module.scss';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const { isArticlesPageWasOpened } = useJsonSettings()

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
        }
    }, [isArticlesPageWasOpened, dispatch]);

    const onClose = () => {
        setIsOpen(false);
    }
    
    if(isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                <Text title={t('Добро пожаловать')} text={t('Здесь вы можете искать статьи на свой выбор и смотреть их!')} />
            </Drawer>
        )
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.ArticlePageGreeting, {}, [className])}>
           <Text title={t('Добро пожаловать')} text={t('Здесь вы можете искать статьи на свой выбор и смотреть их!')} />
        </Modal>
    );
});