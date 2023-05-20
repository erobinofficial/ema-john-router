import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";
import Error from "./components/Error/Error";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Shop></Shop>,
          loader: ()=> fetch('products.json'),
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path :'about',
          element: <About></About>
        }
      ]
    },
    {
      path:'*',
      element: <Error></Error>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
