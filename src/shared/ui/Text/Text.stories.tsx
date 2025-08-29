import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'widget/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title',
    text: 'Text',
};
export const LightOnlyTitle = Template.bind({});
Light.args = {
    title: 'Title',
};
export const LightOnlyText = Template.bind({});
Light.args = {
    text: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(THEME.DARK)];

export const DarkOnlyTitle = Template.bind({});
Dark.args = {
    title: 'Title',
};
Dark.decorators = [ThemeDecorator(THEME.DARK)];

export const DarkOnlyText = Template.bind({});
Dark.args = {
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(THEME.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Ошибка',
    text: 'Что-то пошло не так',
    theme: TextTheme.ERROR
};
