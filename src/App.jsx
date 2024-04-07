import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Vehicle from "./components/Vehicle";
import Energy from "./components/Energy";
import Charging from "./components/Charging";
import Discover from "./components/Discover";
import Shop from "./components/Shop";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicle />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
