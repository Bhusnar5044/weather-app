import { FC, PropsWithChildren, memo } from 'react';

export const PageLayout: FC<PropsWithChildren> = memo((props) => (
    <div className="bg-dark h-screen w-screen ">{props.children}</div>
));

PageLayout.displayName = 'PageLayout';
