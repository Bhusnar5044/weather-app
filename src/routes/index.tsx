import Dashboard from '@components/Dashboard';
import { FC, Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';

export const Routes: FC = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <RoutesWrapper>
                <Route path="/" element={<Dashboard />} />
            </RoutesWrapper>
        </Suspense>
    );
};
