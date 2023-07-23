import { styled } from '@mui/material/styles';

export const PageContent = styled('main')`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: auto;
    padding-top: 32px;
    width: 96%;
    margin: 0 auto;
    @media (min-width: 1536px) {
        max-width: 1536px;
    }
`;
