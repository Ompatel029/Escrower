import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Contact />  {/* Yeh Contact section hai */}
      <Footer />
    </>
  )
}

export default App