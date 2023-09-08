import "./css/App.css";
import "./css/imageSlider.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import NavbarSmallScreen from "./components/NavbarSmallScreen";

function App() {
  return (
    <>
      <NavBar />
      <NavbarSmallScreen/>
        <HomePage />
      <Footer />
    </>
  );
}

export default App;
