import { Story } from '@storybook/react';
import { THEME } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
