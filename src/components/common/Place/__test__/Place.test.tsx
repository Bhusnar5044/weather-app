import { renderWithStore } from '@test-utils';
import { Place } from '../Place';

describe('Place', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Place />);
        expect(container).toMatchSnapshot();
    });
});
