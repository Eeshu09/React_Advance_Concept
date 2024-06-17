import logo from './logo.svg';
import './App.css';
import Debouncing from './Components/DebouncingThrottling/Debouncing';
import Debounce2 from './Components/DebouncingThrottling/Debounce2';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
     {/* <Debouncing/> */}
     <Debounce2/>
     <ToastContainer/>
    </>
   
  );
}

export default App;
