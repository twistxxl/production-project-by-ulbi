import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"




const App = () => {

        const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={"/"}>
                Главная
            </Link>
            <Link to={"/about"}>
                О нас
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageLazy />} />
                    <Route path={"/about"} element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App