import logo from './logo.svg';
import './App.css';
 import { useRoutes } from 'react-router-dom'
 import {appRoutes} from './routes'
import LandingPage from './components/LandingPage';
function App() {
  const element= useRoutes(appRoutes)
  return (
    <div className="App">
   Welcome to Landing Page
      <LandingPage/>
      {element}
    </div>
  );
}

export default App;
