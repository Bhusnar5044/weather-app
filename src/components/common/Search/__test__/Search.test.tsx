import { render } from '@test-utils';
import { Search } from '../Search';

describe('Search', () => {
    it('should render properly', () => {
        const { container } = render(<Search />);
        expect(container).toMatchSnapshot();
    });
});
