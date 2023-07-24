import { AnyObject, IWeather, IWeatherState } from './types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: IWeatherState = {
    id: '',
    lat: 0,
    lon: 0,
    place: {},
    weather: {},
};

export const weatherSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLocation(state, { payload }: PayloadAction<{ lat: number; lon: number }>) {
            return { ...state, ...payload };
        },
        setPlace(state, { payload }: PayloadAction<AnyObject>) {
            return { ...state, place: payload };
        },
        setWeather(state, { payload }: PayloadAction<IWeather>) {
            return { ...state, weather: payload };
        },
        setImage(state, { payload }: PayloadAction<AnyObject>) {
            return { ...state, image: payload };
        },
        setNameImageOptional(state, { payload }: PayloadAction<string>) {
            return { ...state, image_name: payload };
        },
    },
});

export const { setLocation, setPlace, setImage, setNameImageOptional, setWeather } = weatherSlice.actions;
