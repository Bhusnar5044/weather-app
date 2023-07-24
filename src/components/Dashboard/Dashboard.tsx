import { PageContent } from '@components/Layout';
import Forecast from '@components/common/Forecast';
import Place from '@components/common/Place';
import Weather from '@components/common/Weather';
import WeatherData from '@components/common/WeatherData';
import { useLocation } from '@hooks/useLocation';
import { useAppSelector } from '@slice';
import { FC, memo } from 'react';

export const Dashboard: FC = memo(() => {
    useLocation();
    const { weather } = useAppSelector((state) => state.weather);

    return (
        <PageContent>
            <div className="flex flex-col items-center justify-between pt-5 pb-3 px-5 lg:pt-10 lg:px-10">
                <Weather />
                <Place />
                <div className=" flex-1 flex flex-col md:flex-row w-full flex-wrap justify-center items-start">
                    {weather?.main && (
                        <>
                            <Forecast />
                            <WeatherData />
                        </>
                    )}
                </div>
            </div>
        </PageContent>
    );
});

Dashboard.displayName = 'Dashboard';
