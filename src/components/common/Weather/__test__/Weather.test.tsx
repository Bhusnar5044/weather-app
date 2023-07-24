import { render } from '@test-utils';
import { Weather } from '../Weather';

describe('Weather', () => {
    it('should render properly', () => {
        const { container } = render(<Weather />);
        expect(container).toMatchSnapshot();
    });
});
