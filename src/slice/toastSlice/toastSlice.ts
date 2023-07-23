import { IToastState } from './types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: IToastState = {
    isOpen: false,
    message: '',
    type: 'info',
};

export const toastSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToast(state, { payload }: PayloadAction<IToastState>) {
            return payload;
        },
        closeToast(state) {
            return { ...state, isOpen: false };
        },
    },
});

export const { setToast, closeToast } = toastSlice.actions;
