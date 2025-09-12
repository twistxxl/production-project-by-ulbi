import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import stl from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(stl.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование статьи c Id') + id
                : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;
