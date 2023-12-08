import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Stopwatch from './stopwatch';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Stopwatch/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
