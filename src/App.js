import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import ScoreKeeperPage from './Pages/ScoreKeeperPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
function App() {
  return (
    <div className="App">
    <Navbar/>
    
      <ScoreKeeperPage />

      <Routes>

        
      </Routes>

      
    </div>
  );
}

export default App;