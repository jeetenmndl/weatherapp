import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Hero from "./components/shared/Hero"
import WeatherPage from "./components/pages/WeatherPage"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/weather" element={ <WeatherPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
