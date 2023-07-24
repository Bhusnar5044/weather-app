export type AnyObject = { [key: string]: string | number };

export type IWeather = {
    coord?: {
        lon: number;
        lat: number;
    };
    weather?: AnyObject[];
    base?: string;
    main?: AnyObject;
    visibility?: number;
    wind?: AnyObject;
    rain?: AnyObject;
    clouds?: AnyObject;
    dt?: number;
    sys?: AnyObject;
    timezone?: number;
    id?: number;
    name?: number;
    cod?: number;
};

export interface IWeatherState {
    id: string;
    lat: number;
    lon: number;
    place: AnyObject;
    weather: IWeather;
}
