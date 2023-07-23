import { AlertColor } from '@mui/material/Alert';

export interface IToastState {
    isOpen: boolean;
    message: string;
    type: AlertColor;
}
