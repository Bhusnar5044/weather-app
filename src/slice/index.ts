import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { placesApi } from './services/places';
import { weatherApi } from './services/weather';
import { weatherSlice, initialState as weatherSliceInitialState } from './weatherSlice';

export const initialState = {
    weather: weatherSliceInitialState,
};

const rootReducer = combineReducers({
    weather: weatherSlice.reducer,
    placesApi: placesApi.reducer,
    weatherApi: weatherApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(placesApi.middleware, weatherApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
