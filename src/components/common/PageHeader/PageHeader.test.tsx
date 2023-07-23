import { renderWithRouter, screen } from '@test-utils';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<PageHeader title="Dummy" />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Dummy')).toBeInTheDocument();
    });
});
