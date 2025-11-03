import { Cloud, CloudRainWind, Rainbow, Wind } from 'lucide-react'
import React from 'react'

const Features = () => {

    const featuresData = [
        {
            icon: <Cloud className='text-blue-600 w-20 h-20 ' />,
            title: 'Real-time Weather Data',
            description: 'Access up-to-the-minute weather information for any location worldwide, ensuring you stay informed about current conditions.'
        },
        {
            icon: <CloudRainWind className='text-blue-600 w-20 h-20 ' />,
            title: '7-Day Weather Forecast',
            description: 'Get accurate weather forecasts for the next hours and days, helping you plan your activities with confidence.'
        },
        {
            icon: <Rainbow className='text-blue-600 w-20 h-20 ' />,
            title: 'Faster weather',
            description: 'Experience lightning-fast weather updates with our optimized data retrieval system, ensuring you get the information you need without delay.'
        },
        {
            icon: <Wind className='text-blue-600 w-20 h-20 ' />,
            title: 'Good UI ',
            description: 'Enjoy a user-friendly interface designed for easy navigation and quick access to all weather features, making your experience seamless.'
        }
    ];

    return (
        <section className='px-4 md:px-8 lg:px-20 py-10 lg:py-20  bg-gray-100'>

            {/* heading     */}
            <div>
                <h2 className='text-5xl font-bold text-center mb-6'>Features</h2>
                <p className=' text-lg text-center text-gray-500'> Comprehensive weather information with an intuitive interface</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>

                {
                    featuresData.map((feature, index) => {

                        return (
                            <div className=" border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg bg-white" key={index}>

                                {feature.icon}

                                <h3 className='text-2xl font-semibold my-4'>{feature.title}</h3>

                                <p className='text-gray-500'>
                                    {feature.description}
                                </p>
                            </div>

                        )

                    })
                }



            </div>

        </section>
    )
}

export default Features