import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        { value: 'tab1', content: 'Tab 1' },
        { value: 'tab2', content: 'Tab 2' },
        { value: 'tab3', content: 'Tab 3' },
    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
