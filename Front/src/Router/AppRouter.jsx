import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import publicRoutes from './publicRoutes';

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div style={{ textAlign: 'center', paddingTop: '50px', fontSize: '1.2rem' }}>Cargando...</div>}>
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