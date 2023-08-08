import "./css/App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
        <HomePage />
      <Footer />
    </>
  );
}

export default App;
