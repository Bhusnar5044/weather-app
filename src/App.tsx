import { ErrorBoundary, PageLayout } from '@components/Layout';
import Header from '@components/Layout/Header';
import { Routes } from '@routes';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'slice';

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ErrorBoundary>
                    <PageLayout>
                        <Header />
                        <Routes />
                    </PageLayout>
                </ErrorBoundary>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
