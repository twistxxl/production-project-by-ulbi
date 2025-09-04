import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import stl from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(stl.ArticlePage, {}, [className])}>
            {t('ArticlePage')}
        </div>
    );
};

export default memo(ArticlePage);
