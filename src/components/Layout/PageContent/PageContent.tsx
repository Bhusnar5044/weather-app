import CircularProgress from '@mui/material/CircularProgress';
import { FC, memo } from 'react';
import * as Styled from './PageContent.styled';
import { Props } from './types';

export const PageContent: FC<Props> = memo(({ isLoading, children }) => {
    return (
        <Styled.PageContent>
            {isLoading && <CircularProgress title="loader" color="inherit" />}
            {!isLoading && children}
        </Styled.PageContent>
    );
});

PageContent.displayName = 'PageContent';
