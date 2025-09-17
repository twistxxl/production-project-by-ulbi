import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const RouterDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<div>...</div>}>
        <StoryComponent />
    </Suspense>
);
