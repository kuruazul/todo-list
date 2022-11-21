import './App.scss';
import 'bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';

function Pages(){
 return (<Routes>
    <Route index element={<Home/>}/>
  </Routes>)
}

function App() {
  return (
    <BrowserRouter className="App">
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
