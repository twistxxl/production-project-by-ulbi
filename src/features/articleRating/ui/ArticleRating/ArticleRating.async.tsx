/* eslint-disable react/jsx-props-no-spreading */
import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Loader } from '@/shared/ui/Loader';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Loader />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
