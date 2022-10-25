
import { RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import routes from './routes/routes';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
