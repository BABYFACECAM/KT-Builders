import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Subscribe } from "./components/Subscribe";
import { WhyUs } from "./components/WhyUs";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Gallery />
      <WhyUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
