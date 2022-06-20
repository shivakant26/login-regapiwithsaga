import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes ,Route , Redirect} from 'react-router-dom';
import Registration from './Component/Registration';
import 'react-toastify/dist/ReactToastify.css';
import Dashborad from './Component/Dashboard';
import PageNotFound from './Component/pageNotFound';
import DashDetails from './Component/dashDetails';
import Action from './Component/Action';
import CreatePost from './Component/createPost';
import ShowPost from './Component/showPost';

function App() {
  const auth_token = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        {
          auth_token ? 
          <Routes>
            <Route path='/dashboard' element={<Dashborad />}>
              <Route path='dash-details' element={<DashDetails />}/>
              <Route path='action/' element={<Action />}>
                <Route path='create-post' element={<CreatePost/>}/>
                <Route path='show-post' element={<ShowPost/>}/>
              </Route>
            </Route>
            <Route path='*' exact="true" element={<PageNotFound />}/>
        </Routes>
          : 
          <Routes>
            <Route path='/' exact="true" element={<Home/>}/>
            <Route path='/register' exact="true" element={<Registration />}/>
            <Route path='*' exact="true" element={<PageNotFound />}/>
        </Routes>
        }
        
      </Router>
    </div>
  );
}

export default App;
