import { ReactNode } from 'react';

export interface IconProps {
    weatherId: string;
}

export interface WeatherIconMap {
    [weatherId: string]: ReactNode;
}
