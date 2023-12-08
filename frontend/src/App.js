import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Stopwatch from './stopwatch';
import { Demo } from './test';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/demo' element={<Demo/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
