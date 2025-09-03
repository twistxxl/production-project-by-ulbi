import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/icons/avatar_test.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        first: 'blabla',
        lastname: 'dili',
        age: 22,
        country: Country.Belarus,
        city: 'Minsk',
        currency: Currency.USD,
        avatar: avatar,
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
