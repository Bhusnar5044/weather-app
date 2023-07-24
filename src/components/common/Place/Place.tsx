import { useAppSelector } from '@slice';
import { MapPin } from 'lucide-react';
import { FC, memo } from 'react';
import Search from '../Search';

export const Place: FC = memo(() => {
    const { place } = useAppSelector((state) => state.weather);

    return (
        <div className="relative overflow-hidden w-full h-[20rem] rounded-[2.5rem]">
            <div className="sticky w-full h-full">
                <img
                    className="w-full object-fill"
                    src={
                        'https://thumbs.dreamstime.com/b/weather-forecast-background-climate-change-concept-weather-forecast-background-climate-change-concept-collage-sky-image-120764591.jpg'
                    }
                    alt="algo"
                />
            </div>

            <div className="absolute top-0 p-5 bg-slate-900 bg-opacity-50 lg:p-10 h-full w-full gap-4 flex flex-col lg:justify-between lg:flex-row">
                <div className="lg:px-16 grid place-content-center">
                    <h1 className="text-4xl text-light font-bold flex items-center gap-2">
                        <MapPin size={28} color="#F2F2F2" />
                        {place.fullName}
                    </h1>
                    <p className="pl-9 text-gray-400 font-semibold">{place.country}</p>
                </div>
                <Search />
            </div>
        </div>
    );
});
