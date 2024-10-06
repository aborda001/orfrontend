import './App.css';
import Index from './Pages';
import Ts from './Pages/ts';
import Ts1 from './Pages/ts1';
import Ts3 from './Pages/ts3';
import Ts4 from './Pages/ts4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ts" element={<Ts />} />
          <Route path="/ts1" element={<Ts1 />} />
          <Route path="/ts3" element={<Ts3 />} />
          <Route path="/ts4" element={<Ts4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
