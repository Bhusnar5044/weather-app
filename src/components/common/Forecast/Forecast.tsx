import { useAppSelector } from '@slice';
import { useGetForecastApiQuery } from '@slice/services/weather';
import moment from 'moment';
import { FC, memo } from 'react';
import Icon from '../Icon';

export const Forecast: FC = memo(() => {
    const { lat, lon } = useAppSelector((state) => state.weather);

    const { data } = useGetForecastApiQuery(
        {
            path: 'onecall',
            params: [
                { name: 'lat', value: lat },
                { name: 'lon', value: lon },
                { name: 'exclude', value: 'hourly' },
            ],
        },
        { refetchOnMountOrArgChange: true },
    );

    return (
        <div className=" flex flex-col">
            <h3 className="text-light text-2xl py-5 font-bold">
                4 Days <span className="font-light">Forecast</span>
            </h3>
            <div className="flex-1 flex flex-col gap-3">
                {data?.daily?.slice(0, 4).map((day: any) => (
                    <div key={day?.dt} className="flex-1 bg-dark2 text-light flex justify-between rounded-3xl">
                        <div className="flex p-5 items-center text-[2rem] gap-2">
                            <Icon weatherId={day?.weather[0].icon} />
                            <div className="text-base">
                                <h4 className="text-base font-bold ">{moment(day?.dt * 1000).format('dddd')}</h4>
                                <p className="text-indigo-200 opacity-40">{day?.weather[0].main}</p>
                            </div>
                        </div>
                        <div className="bg-indigo-400 px-4 min-w-max text-light grid place-content-center rounded-3xl">
                            {`${Math.floor(day?.temp.day)}° / ${Math.floor(day?.temp.night)}°`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});
