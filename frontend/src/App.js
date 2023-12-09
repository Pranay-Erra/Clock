import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Stopwatch from './stopwatch';
import { Demo } from './test';
import OffCanvasMenu from './offcanvas';
import Purpose from './purpose';
import Home from './home';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/purpose' element={<Purpose/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
