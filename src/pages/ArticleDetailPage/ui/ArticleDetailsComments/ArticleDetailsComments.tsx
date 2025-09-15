import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useCallback, memo } from 'react';
import AddCommentForm from 'features/AddcommentForm/ui/AddCommentForm/AddCommentForm';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // dispatch(fetchArticleRecommendations());
    });
    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                // className={stl.commentTitle}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
