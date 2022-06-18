import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Registration from './Component/Registration';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
