import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ItemPage from "./Pages/ItemPage";
import StorePage from "./Pages/StorePage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/shop", element: <StorePage /> },
      { path: "/shop/:id", element: <ItemPage /> },
    ],
  },
]);

export default router;
