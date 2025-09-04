import { Article } from './article';

export interface ArticleDetailSchema {
    data?: Article;
    isLoading: boolean;
    error?: string;
}
