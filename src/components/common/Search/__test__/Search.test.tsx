import { renderWithStore } from '@test-utils';
import { Search } from '../Search';

describe('Search', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Search />);
        expect(container).toMatchSnapshot();
    });
});
