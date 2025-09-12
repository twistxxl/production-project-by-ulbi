import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddcommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
    getArticleRecommendations,
} from 'pages/ArticleDetailPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailPage/model/slices';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import stl from './ArticleDetailPage.module.scss';
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

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
                <Text
                    size={TextSize.L}
                    className={stl.recommendationsTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={stl.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={stl.commentTitle}
                    title={t('Комментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailPage);
