import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import publicRoutes from './publicRoutes';
import LoadingSkeleton from '../components/LoadingSkeleton';

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