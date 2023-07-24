import { FC, memo } from 'react';
import { Props } from './types';

export const PageContent: FC<Props> = memo(({ children }) => {
    return <main className="flex flex-col gap-2 w-full">{children}</main>;
});

PageContent.displayName = 'PageContent';
