import { renderWithStoreAndRouter, screen } from '@test-utils';
import { Provider } from 'react-redux';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import reduxMockStore from 'redux-mock-store';
import { initialState } from 'slice';
import { Dashboard } from '../Dashboard';

const mockStore = reduxMockStore();

const store = mockStore({
    ...initialState,
});
const renderer = () =>
    renderWithStoreAndRouter(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </Provider>,
    );
describe('Dashboard', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    });
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
});
