import { renderWithStore } from '@test-utils';
import { Weather } from '../Weather';

describe('Weather', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Weather />);
        expect(container).toMatchSnapshot();
    });
});
