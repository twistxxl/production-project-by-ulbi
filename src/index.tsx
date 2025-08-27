import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvoder } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ThemeProvider/ErrorBoundary";
import 'app/styles/index.scss'


render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvoder >
                    <App />
                </ThemeProvoder>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
)