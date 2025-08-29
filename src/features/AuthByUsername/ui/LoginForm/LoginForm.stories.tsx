import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: "/"
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    
};
Primary.decorators = [StoreDecorator({
    login: { username: '123', password: '123' }
})];

export const WithError = Template.bind({});
WithError.args = {
    
};
WithError.decorators = [StoreDecorator({
    login: { username: '123', password: '123', error: 'ERROR' }
})];

export const Loading = Template.bind({});
Loading.args = {
    
};
Loading.decorators = [StoreDecorator({
    login: { username: '123', password: '123', isLoading: true }
})];