import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddcommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import stl from './ArticleDetailPage.module.scss';
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(stl.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена :(')}
            </div>
        );
    }

    const reducers: ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(stl.ArticleDetailPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад')}</Button>
                <ArticleDetails id={id} />
                <Text className={stl.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailPage);
