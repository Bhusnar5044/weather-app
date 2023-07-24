import { initialState } from '@slice';
import { mockStore, render, screen, waitFor } from '@test-utils';
import * as weatherMoc from '@utils/testData/weatherCurrentMock.json';
import { Provider } from 'react-redux';
import { Dashboard } from '../Dashboard';

const store = mockStore({
    weather: {
        ...initialState.weather,
        weather: weatherMoc,
    },
    weatherApi: {},
});
const renderer = () =>
    render(
        <Provider store={store}>
            <Dashboard />
        </Provider>,
    );
describe('Dashboard', () => {
    it('should render properly', async () => {
        const { container } = renderer();
        await waitFor(() => {
            expect(container).toMatchSnapshot();
            expect(screen.findByText(/The temperature you actually feel/)).toBeInTheDocument();
        });
    });
});
