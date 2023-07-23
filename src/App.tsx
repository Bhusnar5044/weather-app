import { ErrorBoundary } from '@components/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { Routes } from '@routes';
import { theme } from '@theme';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'slice';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <Routes />
                    </ErrorBoundary>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
