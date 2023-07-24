import { initialState } from '@slice';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

export const mockAxios = new MockAdapter(axios);

const mockStore = configureStore([]),
    store = mockStore({ ...initialState });

const WithRouter: FC<PropsWithChildren> = (props) => <MemoryRouter>{props.children}</MemoryRouter>;

const WithStore: FC<PropsWithChildren> = (props) => <Provider store={store}>{props.children}</Provider>;

const WithStoreAndRouter: FC<PropsWithChildren> = (props) => (
    <Provider store={store}>
        <MemoryRouter>{props.children}</MemoryRouter>
    </Provider>
);

export const renderWithStore = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStore, ...options });

export const renderWithRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

export const renderWithStoreAndRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStoreAndRouter, ...options });

// re-export everything
export * from '@testing-library/react';
export { userEvent };
