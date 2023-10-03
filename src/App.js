
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login }from './components/Login';
import { Signup } from './components/Signup';
import { Landing } from './components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
