const OPENWEATHER = import.meta.env.VITE_OPENWEATHER;
const MAPBOX_API = import.meta.env.VITE_MAPBOX_API;
const VITE_UNSPLASH_API = import.meta.env.VITE_UNSPLASH_API;

export const urls = {
    weather: OPENWEATHER,
    geo: MAPBOX_API,
    unsplash: VITE_UNSPLASH_API,
};
