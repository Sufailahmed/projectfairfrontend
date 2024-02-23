
import './App.css';

import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
 
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth register={"register"}/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/project' element={<Project/>}/>



     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
