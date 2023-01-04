import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router/Router';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={Router}>
        <Home></Home>
      </RouterProvider>
    </div>
  );
}

export default App;
