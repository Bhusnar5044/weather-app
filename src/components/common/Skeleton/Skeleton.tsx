import { cn } from '@utils';
import { FC } from 'react';

export const Skeleton: FC = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
};
