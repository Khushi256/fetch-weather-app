# Weather App

This is a simple React-based weather app that fetches real-time weather data and displays it for a given city. The app fetches the weather details such as temperature, humidity, and wind speed using the [WeatherAPI](https://www.weatherapi.com/). The UI is designed with a clean and modern look, with various icons representing different weather conditions.

## Features

- **Search Weather**: Search for any city to get the current weather details.
- **Real-time Data**: Get weather information such as temperature, humidity, and wind speed.
- **Icons**: Displays relevant icons based on the weather condition (sun, clouds, rain, etc.).
- **Responsive UI**: The app is designed to be user-friendly with a clean, minimal interface.

## Tech Stack

- **Frontend**: ReactJS
- **Weather API**: [WeatherAPI](https://www.weatherapi.com/)
- **Icons**: Custom weather-related icons used throughout the app.

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Install the required dependencies:**
  ```bash
   cd weather-app
   npm install
  ```
3. **Create a .env file in the root of the project and add your WeatherAPI key:**
  ```bash
  VITE_WEATHER_API_KEY=your_weather_api_key
```
4. **Run the app:**
 ```bash
  npm start
```
5. **Open the app in your browser at http://localhost:3000/.**

## API Generation (Work in Progress)
Currently, the app fetches weather data directly from WeatherAPI. However, I am working on generating an API to integrate with the app. This API will allow users to fetch weather data more efficiently and provide more customizable options for querying weather information.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and create a pull request with your changes. Make sure to follow the code of conduct and maintain clean, readable code.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- WeatherAPI for the weather data.
- All icon resources are either custom-made or sourced from Freepik.
