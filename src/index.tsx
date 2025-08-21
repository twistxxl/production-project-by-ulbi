import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvoder } from "./theme/ThemeProvoder";


render(
    <BrowserRouter>
        <ThemeProvoder >
            <App />
        </ThemeProvoder>
    </BrowserRouter>,
    document.getElementById("root")
)