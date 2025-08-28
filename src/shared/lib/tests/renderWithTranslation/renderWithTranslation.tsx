import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { BrowserRouter } from 'react-router-dom';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <BrowserRouter>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </BrowserRouter>
    );
}

//решение для фикса тестов после 31 урока от ии
// src/shared/lib/tests/renderWithTheme/renderWithTheme.tsx
// import React from 'react';
// import { render } from '@testing-library/react';
// import { I18nextProvider } from 'react-i18next';
// import i18nForTests from 'shared/config/i18n/i18nForTests';
// import { ThemeProvoder } from 'app/providers/ThemeProvider';
// import { THEME } from 'app/providers/ThemeProvider/lib/ThemeContext';

// interface ComponentRenderOptions {
//     theme?: THEME;
// }

// export function renderWithTheme(
//     component: React.ReactNode,
//     options: ComponentRenderOptions = {},
// ) {
//     const {
//         theme = THEME.LIGHT,
//     } = options;

//     return render(
//         <ThemeProvoder initialTheme={theme}>
//             <I18nextProvider i18n={i18nForTests}>
//                 {component}
//             </I18nextProvider>
//         </ThemeProvoder>,
//     );
// }