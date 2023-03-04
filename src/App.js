import './App.css';
import Navbar from './components/navbar/Navbar';
import Router from './Router/Router'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
