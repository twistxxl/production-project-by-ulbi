import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleRating } from '@/features/articleRating';
import stl from './ArticleDetailPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(stl.ArticleDetailPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailPage);
