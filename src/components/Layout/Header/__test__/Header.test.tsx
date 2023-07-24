import { renderWithRouter } from '@test-utils';
import { Header } from '../Header';

describe('Header', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<Header />);
        expect(container).toMatchSnapshot();
    });
});
