import AboutUs from "./components/AboutUs/AboutUs";
import Chef from "./components/Chef/Chef";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Specials from "./components/Specials/Specials";
import Veggies from "./components/Veggies/Veggies";

function App() {
  return (
    <div className="App">
      <AboutUs></AboutUs>
      <Chef></Chef>
      <FindUs></FindUs>
      <Footer></Footer>
      <Gallery></Gallery>
      <Header></Header>
      <Intro></Intro>
      <Navbar></Navbar>
      <Specials></Specials>
      <Veggies></Veggies>
    </div>
  );
}

export default App;
