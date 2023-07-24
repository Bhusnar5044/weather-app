const OPENWEATHER = process.env.VITE_OPENWEATHER;
const MAPBOX_API = process.env.VITE_MAPBOX_API;
const VITE_UNSPLASH_API = process.env.VITE_UNSPLASH_API;

export const urls = {
    weather: OPENWEATHER ?? '',
    geo: MAPBOX_API ?? '',
    unsplash: VITE_UNSPLASH_API ?? '',
};
