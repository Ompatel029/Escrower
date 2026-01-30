import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Team from './components/Team.jsx'
import Pricing from './components/Pricing.jsx'
import Services from './components/Services.jsx'
import About from './components/Above.jsx'
import Blog2  from './components/Blog2.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog2 />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
