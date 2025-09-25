import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/deprecated/Text';
import { getArticles } from '../ui/ArticlePage/model/slices/articlePageSlice';
import {
    getArticlesPageView,
    getArticlesPageIsLoading,
    getArticlesPageError,
} from '../ui/ArticlePage/model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    if (error) {
        return <Text text={error} />;
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                className={className}
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
});
