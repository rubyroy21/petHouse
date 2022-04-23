import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { AddData } from './pages/AddData';
import { GetSingleData } from './pages/GetSingleData';
import { About } from './pages/About';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/create" element={<AddData/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/:id" element={<GetSingleData/>}/>
      </Routes>
    </div>
  );
}

export default App;
