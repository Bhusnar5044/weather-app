import Dashboard from '@components/Dashboard';
import { PageLayout } from '@components/Layout';
import ResponsiveAppBar from '@components/Layout/ResponsiveAppBar';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import { closeToast } from '@slice/toastSlice';
import { FC, Suspense, useCallback } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'slice';

export const Routes: FC = () => {
    const { isOpen, message, type } = useAppSelector((state) => state.toast);
    const dispatch = useAppDispatch();
    const handleClose = useCallback(() => dispatch(closeToast()), [dispatch]);
    return (
        <Suspense fallback={<LinearProgress />}>
            <RoutesWrapper>
                <PageLayout>
                    <ResponsiveAppBar />
                    <Route path="/" element={<Dashboard />} />
                </PageLayout>
            </RoutesWrapper>
            <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Suspense>
    );
};
