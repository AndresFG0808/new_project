import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import publicRoutes from './publicRoutes';
import LoadingSkeleton from '../componentes/LoadingSkeleton/LoadingSkeleton';

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<LoadingSkeleton />}>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;