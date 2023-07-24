# Weather App

This is a weather web application built with React and Vite, allowing users to search for weather information for different locations.

## Features

-   Search for weather information by location
-   View current weather details
-   Display hourly and daily weather forecasts

## Demo

You can check out the live demo of the app at [https://example.com](https://example.com).

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

-   Node.js (v16 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-vite-weather-app.git
    cd react-vite-weather-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Usage

1. Obtain a free API key from a weather API provider (e.g., OpenWeatherMap).

2. Create a `.env` file in the root of the project and add your API key:

    ```
    VITE_MAPBOX_API=
    VITE_MAPBOX_ACCESS_TOKEN=
    VITE_APP_ID=
    VITE_OPENWEATHER=
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Tech Stack

-   React - Frontend library
-   Vite - Build tool and development server
-   Axios - HTTP client for API requests
-   Tailwind css - css framework
-   Weather API - Provider for weather data (e.g., OpenWeatherMap)
-   mapbox api - provider for geo locations

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms.

## Acknowledgments

Special thanks to the creators of React, Vite, and all the wonderful open-source libraries used in this project.

---

Enjoy checking the weather with the React Vite Weather App! ☀️🌧️
