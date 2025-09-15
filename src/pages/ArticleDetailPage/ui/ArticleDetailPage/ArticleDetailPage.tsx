import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import stl from './ArticleDetailPage.module.scss';
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (
            <Page className={classNames(stl.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена :(')}
            </Page>
        );
    }

    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(stl.ArticleDetailPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailPage);
