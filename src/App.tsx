import "./App.css";
import { ShortLinksContextProvider } from "./context/ShortLinksContext";
import RouteConfig from "./routes/RouteConfig";

function App() {
  return (
    <>
      <ShortLinksContextProvider>
        <RouteConfig />
      </ShortLinksContextProvider>
    </>
  );
}

export default App;
