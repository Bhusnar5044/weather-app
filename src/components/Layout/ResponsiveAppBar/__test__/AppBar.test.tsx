import { renderWithRouter } from '@test-utils';
import { ResponsiveAppBar } from '../ResponsiveAppBar';

describe('ResponsiveAppBar', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<ResponsiveAppBar />);
        expect(container).toMatchSnapshot();
    });
});
