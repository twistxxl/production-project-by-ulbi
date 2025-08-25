import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { THEME } from "app/providers/ThemeProvider";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: "/"
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    children: "Sample text",
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Sample text",
    theme: AppLinkTheme.SECONDARY
};


export const PrimaryDarkTheme = Template.bind({});
Primary.args = {
    children: "Foooooo",
    theme: AppLinkTheme.PRIMARY
}
PrimaryDarkTheme.decorators = [ThemeDecorator(THEME.DARK)];

export const SecondaryDarkTheme = Template.bind({});
Secondary.args = {
    children: "Booo-oo-oooo",
    theme: AppLinkTheme.SECONDARY
}
SecondaryDarkTheme.decorators = [ThemeDecorator(THEME.DARK)];
