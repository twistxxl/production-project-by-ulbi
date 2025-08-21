import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvoder } from "app/providers/ThemeProvider";


render(
    <BrowserRouter>
        <ThemeProvoder >
            <App />
        </ThemeProvoder>
    </BrowserRouter>,
    document.getElementById("root")
)