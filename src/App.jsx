import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ShippingInfo from "./components/ShippingInfo";
import useFetch from "./hooks/useFetch";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  return (
    <CartProvider>
      <Navbar />
      <ShippingInfo />
      <ScrollRestoration />
      <Outlet context={{ data, loading }} />
      <Footer />
    </CartProvider>
  );
}

export default App;
