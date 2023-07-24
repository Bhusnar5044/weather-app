import { render } from '@test-utils';
import { WeatherData } from '../WeatherData';

describe('WeatherData', () => {
    it('should render properly', () => {
        const { container } = render(<WeatherData />);
        expect(container).toMatchSnapshot();
    });
});
