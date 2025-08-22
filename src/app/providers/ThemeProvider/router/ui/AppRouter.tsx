import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route/routeConfig";


export function AppRouter() {
    return (
        <Suspense fallback={<div>Sexy loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        }
                    />
                )
                )}
            </Routes>
        </Suspense>
    )
}
