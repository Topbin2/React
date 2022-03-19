import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </nav>

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
