import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{
                id: '1',
                rate: 4,
                feedback: 'Хорошая статья',
                userId: '1',
                articleId: '1',
            }],
        },
    ],
};
export const WithoutStars = Template.bind({});
WithoutStars.args = {
    articleId: '1',
};
WithoutStars.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
})];
WithoutStars.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
