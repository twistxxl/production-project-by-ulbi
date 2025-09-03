import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarTest from 'shared/assets/icons/avatar_test.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarTest,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarTest,
};
