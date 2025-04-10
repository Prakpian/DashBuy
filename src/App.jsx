import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ShippingInfo from "./components/ShippingInfo";

function App() {
  return (
    <>
      <Navbar />
      <ShippingInfo />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
