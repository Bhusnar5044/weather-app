import { urls } from '@constant/urls';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@utils/axiosBaseQuery';
import { createUrlWithParams } from '@utils/createUrlWithParams';
import { createUrlWithParamsTypes } from '@utils/types';
const VITE_APP_ID = process.env.VITE_APP_ID;

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: axiosBaseQuery({
        baseUrl: urls.weather,
    }),

    tagTypes: ['currentWeather', 'forecast'],

    endpoints: (builder) => ({
        getWeatherApi: builder.query({
            query: (payload: createUrlWithParamsTypes) => ({
                url: createUrlWithParams({
                    ...payload,
                    params: [...payload.params, { name: 'appid', value: VITE_APP_ID ?? '' }],
                }),
            }),
            providesTags: ['currentWeather'],
        }),
        getForecastApi: builder.query({
            query: (payload) => ({
                url: createUrlWithParams({
                    ...payload,
                    params: [...payload.params, { name: 'appid', value: VITE_APP_ID ?? '' }],
                }),
            }),
            providesTags: ['forecast'],
        }),
    }),
});

export const { useGetWeatherApiQuery, useGetForecastApiQuery } = weatherApi;
