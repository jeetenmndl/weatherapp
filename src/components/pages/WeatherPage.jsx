import React, { useState } from 'react'
import WeatherCard from '../shared/WeatherCard';

const WeatherPage = () => {

    const [searchInput, setSearchInput] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    if(!searchInput) {
        alert("Please enter a city name");
        return;
    }

    setLoading (true);

    try{
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchInput)}&count=1&language=en&format=json`,)

        const geoData = await response.json();

        if(!geoData.results){
            alert("Location not found");
        }

        const {latitude, longitude, name, country} = geoData.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility,pressure_msl&temperature_unit=fahrenheit&wind_speed_unit=mph&visibility_unit_preference=miles`,)

        const weatherData = await weatherResponse.json();

        console.log(weatherData);

        setWeather(weatherData);

    }catch{
        alert("An error occurred while fetching weather data");
    }finally{
        setLoading(false)
    }

}

  return (
    <div>

        {/* search section  */}
        <section className='bg-linear-to-br from-purple-900 to-blue-200 py-12'>
            <div className='max-w-2xl mx-auto px-4 sm:px-6'>
                {/* heading  */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-white mb-2'>Search Weather</h1>
                    <p className='text-lg text-white/90'>Get real-time weather information for any city worldwide</p>
                </div>

                {/* search box  */}
                <form onSubmit={handleSubmit} className='flex gap-3'>
                    <div className='flex-1 relative'>
                        <input type="text" value={searchInput}
                        onChange={(e)=>{setSearchInput(e.target.value)}} 
                        placeholder='Enter city name...'
                        className='w-full px-6 py-4 rounded-lg bg-white border-0 focus:ring-2 '
                        />
                    </div>

                    <button type='submit' className='px-8 py-4 bg-white rounded-lg font-semibold hover:shadow-lg'>
                        { loading ? "Searching..." : "Search"}
                    </button>

                </form>

            </div>


        </section>

            {
                weather && (
                    <div className='max-w-2/3 mx-auto mt-10 px-4 sm:px-6 bg-white rounded-lg p-6 shadow'>
                        <WeatherCard weather={weather.current} />
                    </div>
                )
            }

    </div>
  )
}

export default WeatherPage