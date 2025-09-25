import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            sidebar={<Sidebar />}
                            header={<Navbar />}
                            content={<AppRouter />}
                            toolbar={<span>Toolbar</span>}
                        />
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
