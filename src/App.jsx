import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"
import WeatherPage from "./components/pages/WeatherPage"

function App() {
 
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/weather" element={<WeatherPage />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
