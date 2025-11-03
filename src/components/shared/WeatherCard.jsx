import { Cloud, Droplets, Eye, Wind } from 'lucide-react'
import React from 'react'
import { getWeatherStatus } from '../../actions/getWeatherStatus'

const WeatherCard = ({weather}) => {
  return (
    <div className='border rounded-2xl border-gray-300 shadow-lg overflow-hidden'>

        {/* header  */}
        <div className='bg-linear-to-r from-purple-900 to-blue-200 p-8 text-white'>
            <div className='flex items-start justify-between mb-4'>
                <div>
                    <h2 className='text-4xl font-bold mb-2'>Weather</h2>
                    <p className='text-white/90 text-lg'>{getWeatherStatus(weather.weather_code)}</p>
                </div>

            </div>

            <div className='flex items-baseline gap-2'>
                <span className='text-6xl font-bold'>{weather.temperature_2m}</span>
                <span className='text-2xl'>°F</span>
            </div>

            <p className='text-white/80 mt-2'> Feels like 
            {weather.apparent_temperature}°F
            </p>

        </div>

        {/* details  */}
        <div className="p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                <div className='flex flex-col items-center text-center'>
                    <Droplets className="w-8 h-8 mb-3" />
                    <p className='text-sm mb-1'>Humidity</p>
                    <p className='text-2xl font-bold'>{weather.relative_humidity_2m}%</p>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <Wind className="w-8 h-8 mb-3" />
                    <p className='text-sm mb-1'>Wind Speed</p>
                    <p className='text-2xl font-bold'>{weather.wind_speed_10m} mph</p>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <Eye className="w-8 h-8 mb-3" />
                    <p className='text-sm mb-1'>Visibility</p>
                    <p className='text-2xl font-bold'>{weather.visibility} m</p>
                </div>
                
                <div className='flex flex-col items-center text-center'>
                    <Cloud className="w-8 h-8 mb-3" />
                    <p className='text-sm mb-1'>Pressure</p>
                    <p className='text-2xl font-bold'>{weather.pressure_msl} mb</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default WeatherCard