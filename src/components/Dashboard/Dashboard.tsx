import { PageContent } from '@components/Layout';
import PageHeader from '@components/common/PageHeader';
import { FC, memo } from 'react';

export const Dashboard: FC = memo(() => {
    return (
        <PageContent>
            <PageHeader title="Dashboard" showDatePicker />
        </PageContent>
    );
});

Dashboard.displayName = 'Dashboard';
