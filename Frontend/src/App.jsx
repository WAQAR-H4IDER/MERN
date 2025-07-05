import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import HomeScreen from './Screens/HomeScreen';
import"./app.css"

function App() {

  return (
    <>
    <Navbar />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
