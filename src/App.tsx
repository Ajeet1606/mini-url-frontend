import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import RouteConfig from "./routes/RouteConfig";

function App() {
  return (
    <>
      <Navbar />
      <RouteConfig />
      <Footer/>
    </>
  );
}

export default App;
