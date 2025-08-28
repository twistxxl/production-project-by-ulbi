import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: "/"
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'sample numbers',
    value: '12323'
};
