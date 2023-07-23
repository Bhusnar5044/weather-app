import { styled } from '@mui/material';
import { theme } from '@theme';

export const PageLayoutStyled = styled('div')`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-areas:
        'header'
        'main';
    grid-template-columns: 1fr;
    grid-template-rows: 4.2em auto;
    background-color: ${theme.palette.grey[800]};

    & > div {
        padding: 0;
        margin: 2rem 0;
    }

    & > header {
        grid-area: header;
    }

    & > main {
        grid-area: main;
        transition: width 200ms;
        padding-bottom: 35px;
    }
`;
