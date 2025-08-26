import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';
import stl from './PageError.module.scss';
import { useTranslation } from "react-i18next";
import { Button } from "shared/lib/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

    const {t} = useTranslation()


    const reloadPage = () => location.reload();

    return (
        <div className={classNames(stl.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};