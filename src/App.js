import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import Park from "./components/Park/park";
import Schedule from "./components/Schedule/schedule";
import Pricing from "./components/Pricing/pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/instructors" element={<Park />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/reviews" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
