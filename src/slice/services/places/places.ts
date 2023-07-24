import { urls } from '@constant/urls';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@utils/axiosBaseQuery';
import { createUrlWithParams } from '@utils/createUrlWithParams';
import { createUrlWithParamsTypes } from '@utils/types';
const VITE_MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const placesApi = createApi({
    reducerPath: 'placesApi',
    baseQuery: axiosBaseQuery({
        baseUrl: urls.geo,
    }),

    tagTypes: ['places'],

    endpoints: (builder) => ({
        fetchGeoApi: builder.query({
            query: (payload: createUrlWithParamsTypes) => ({
                url: createUrlWithParams({
                    ...payload,
                    params: [
                        ...payload.params,
                        { name: 'access_token', value: VITE_MAPBOX_ACCESS_TOKEN },
                        { name: 'language', value: 'es' },
                        { name: 'limit', value: 5 },
                    ],
                }),
            }),
            providesTags: ['places'],
        }),
        fetchPlacesApi: builder.query({
            query: (payload: string) => ({
                url: createUrlWithParams({
                    path: `${payload}.json`,
                    params: [
                        { name: 'access_token', value: VITE_MAPBOX_ACCESS_TOKEN },
                        { name: 'language', value: 'es' },
                        { name: 'limit', value: 5 },
                    ],
                }),
            }),
            providesTags: ['places'],
        }),
    }),
});

export const { useFetchGeoApiQuery, useFetchPlacesApiQuery } = placesApi;
