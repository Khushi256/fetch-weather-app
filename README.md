# Weather App

![Weather App Screenshot](.localhost_5173_.png)

This is a simple **React-based weather app** that fetches real-time weather data and displays it for a given city using the **OpenWeatherMap API**. It features a clean and modern user interface with visual icons and background styling to enhance the experience.

---

## 🔍 Features

- **🔎 Search Functionality**: Enter any city to get live weather updates.
- **📡 Real-Time Weather Data**:
  - 🌡️ Temperature
  - 💧 Humidity
  - 💨 Wind Speed
- **🌤️ Weather Icons**: Displays dynamic icons based on weather conditions.
- **🖥️ Responsive UI**: A modern card layout over a scenic background.

---

## 🖼️ UI Preview

The latest UI includes:
- A centered weather display card
- Mountain background for visual appeal
- Search bar for location input
- Icons and stats for temperature, humidity, and wind

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Weather API**: [OpenWeatherMap](https://openweathermap.org/)
- **Icons**: Custom and OpenWeatherMap-based weather icons
- **Styling**: CSS / Tailwind (if applicable)

---

## ⚙️ Getting Started

Follow the steps below to run the app locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Khushi256/weather-app.git


## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Khushi256/weather-app.git
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
