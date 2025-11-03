import Button from "./Button"

const Hero = () => {

  return (
    <section className="grid grid-cols-2 gap-6 border border-purple-500 rounded-lg mx-20 my-10 ">

        {/* text part  */}
        <div className="pt-40 pl-8">
            <h1 className="text-5xl font-extrabold mb-4 ">Know Before You Go</h1>
            <p className="text-lg mb-4">Get Accurate, real time, weather forcasts for any location worldwide. Plan Your activities with confidence and stay informed.</p>
            <Button text="Show Weather" />
        </div>

        {/* image part  */}
        <div className="w-full">
            <div className="overflow-hidden w-full grid place-content-center h-[60vh]">
                <img src="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="weather image" />
            </div>
        </div>

    </section>
  )
}

export default Hero