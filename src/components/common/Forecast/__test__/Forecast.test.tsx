import { initialState } from '@slice';
import { renderWithStore, screen } from '@test-utils';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import { Forecast } from '../Forecast';

const mockStore = reduxMockStore();

const store = mockStore({
    ...initialState,
});

const renderer = () =>
    renderWithStore(
        <Provider store={store}>
            <Forecast />
        </Provider>,
    );
describe('Forecast', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/4 Days/)).toBeInTheDocument();
    });
});
