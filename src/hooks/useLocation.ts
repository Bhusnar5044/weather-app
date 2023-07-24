import { useAppDispatch, useAppSelector } from '@slice';
import { useFetchGeoApiQuery } from '@slice/services/places';
import { setLocation, setPlace } from '@slice/weatherSlice';
import { useEffect } from 'react';

export const useLocation = () => {
    const {
        lat,
        lon,
        weather: { name, sys },
    } = useAppSelector((state) => state.weather);
    const dispatch = useAppDispatch();

    const { data, isSuccess } = useFetchGeoApiQuery({
        path: `${lat},${lon}.json`,
        params: [{ name: 'limit', value: 1 }],
    });

    useEffect(() => {
        console.log('useLocation', { data, name });
        if (isSuccess && data) {
            const place = {
                lat: lat ?? 0,
                lon: lon ?? 0,
                fullName: name ?? 'Unknown',
                country: sys?.country ?? 'Unknown',
            };
            dispatch(setPlace(place));
        }
    }, [data, dispatch, isSuccess, lat, lon, name, sys?.country]);

    useEffect(() => {
        if (!lat && !lon) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    dispatch(setLocation({ lat: position.coords.latitude, lon: position.coords.longitude }));
                },
                function (error) {
                    // paris added by default
                    dispatch(setLocation({ lat: 48.85341, lon: 2.3488 }));
                },
            );
        }
    }, [dispatch, lat, lon]);

    return location;
};
