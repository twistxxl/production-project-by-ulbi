import { Story } from '@storybook/react';
import { THEME, ThemeProvoder } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <ThemeProvoder initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvoder>
)
