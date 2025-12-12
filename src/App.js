import Booking from "./Components/Booking/Booking";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Packages from "./Components/Packages/Packages";
import Tours from "./Components/Tours/Tours";
import WhyUs from "./Components/WhyUs/WhyUs";

function App() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <Tours/>
   <Packages/>
  <Gallery/>
 
  <WhyUs/>
   <Booking/>
  <Footer/>
</>
  );
}

export default App;
