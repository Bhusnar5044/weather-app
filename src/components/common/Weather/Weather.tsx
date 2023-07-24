import { useAppDispatch, useAppSelector } from '@slice';
import { useGetWeatherApiQuery } from '@slice/services/weather';
import { setWeather } from '@slice/weatherSlice';
import { FC, memo, useEffect } from 'react';
import Icon from '../Icon';
import Loading from '../Loading';

export const Weather: FC = memo(() => {
    const { lat, lon } = useAppSelector((state) => state.weather);
    const dispatch = useAppDispatch();
    const { data, isFetching, isSuccess, isError } = useGetWeatherApiQuery(
        {
            path: 'weather',
            params: [
                { name: 'lat', value: lat },
                { name: 'lon', value: lon },
            ],
        },
        { refetchOnMountOrArgChange: true },
    );

    useEffect(() => {
        isSuccess && dispatch(setWeather(data));
    }, [data, dispatch, isSuccess]);

    if (isError) {
        return <p>Something went wrong</p>;
    }

    return (
        <div className="absolute z-10 flex flex-col left-0 top-[25%] lg:top-[calc(12.5rem-6rem)] w-32 shadow-2xl rounded-e-[2.5rem] h-40 lg:h-48 bg-indigo-400 text-light">
            <span className="absolute -top-8 w-4 md:w-8 h-8 bg-indigo-600">
                <div className="w-full h-full bg-dark rounded-bl-3xl" />
            </span>
            <span className="absolute -bottom-8 w-4 md:w-8 h-8 bg-indigo-400">
                <div className="w-full h-full bg-dark rounded-tl-3xl" />
            </span>

            <div className="flex-1 p-2 shadow-md bg-indigo-600 grid place-content-center rounded-e-[2.5rem] rounded-bl-lg">
                {isFetching ? (
                    <Loading />
                ) : (
                    data?.main && (
                        <div className="flex items-center flex-col">
                            <div className="text-3xl text-[2.5rem]">
                                <Icon weatherId={data?.weather[0].icon} />
                            </div>
                            {data?.weather[0].main}
                        </div>
                    )
                )}
            </div>

            <div className="flex-1 flex justify-center items-center">
                <div className="flex text-3xl">
                    {isFetching ? (
                        <Loading />
                    ) : (
                        <>
                            {data?.main && (
                                <>
                                    {Math.round(data?.main.temp)}
                                    <span className="text-sm">°C</span>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
});
