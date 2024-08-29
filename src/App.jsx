import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Topbar from "./Components/Topbar"
import Home from './Components/Page/Home';
import AboutPage from './Components/Page/AboutPage';
import AppointmentPage from './Components/Page/AppointmentPage';
import ServicePage from './Components/Page/ServicePage';



function App() {
  return (
    <>
      <Topbar />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
