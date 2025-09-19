import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRating, useRateArticle } from '../api/ArticleRatingApi';
import { RatingCard } from '@/entities/RatingCard';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id || '',
        articleId,
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id || '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }, [articleId, rateArticleMutation, userData?.id]);
    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }
    const rating = data?.[0];
    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью ')}
            feedbackTitle={t('Оставьте отзыв о статье, это поможет нам стать лучше!')}
            hasFeedback
        />
    );
});

export default ArticleRating;
