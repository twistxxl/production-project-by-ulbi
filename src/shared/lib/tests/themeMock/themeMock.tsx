import React from 'react';
import { Theme as THEME } from '@/app/providers/ThemeProvider/lib/ThemeContext';

export const themeMock = {
    theme: THEME.LIGHT,
    setTheme: jest.fn(),
};

export const ThemeProviderMock = ({ children }: { children: React.ReactNode }) => (
    <div className={`app ${themeMock.theme}`}>
        {children}
    </div>
);
