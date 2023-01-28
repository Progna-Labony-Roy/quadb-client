import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Routes';


function App() {
  return (
    <div className="App">
      <p className='flex justify-center text-3xl font-bold text-violet-800 py-10'>Theatre</p>
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
