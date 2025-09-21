import React from 'react';
import { Theme as THEME } from '@/shared/const/theme';

export const themeMock = {
    theme: THEME.LIGHT,
    setTheme: jest.fn(),
};

export const ThemeProviderMock = ({ children }: { children: React.ReactNode }) => (
    <div className={`app ${themeMock.theme}`}>
        {children}
    </div>
);
