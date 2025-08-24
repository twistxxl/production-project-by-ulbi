import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvoder } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ThemeProvider/ErrorBoundary";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvoder >
                <App />
            </ThemeProvoder>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
)