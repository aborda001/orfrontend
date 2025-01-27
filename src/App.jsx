import './App.css';
import Index from './Pages';
import Ts from './Pages/ts';
import Ti from './Pages/ti';
import Ti1 from './Pages/ti1';
import Ti2 from './Pages/ti2';
import Ti3 from './Pages/ti3';
import Ti4 from './Pages/ti4';
import Ts1 from './Pages/ts1';
import Ts2 from './Pages/ts2';
import Ts3 from './Pages/ts3';
import Ts4 from './Pages/ts4';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <>
        <button className="custom-button" style={{ maxWidth: "5rem",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "5px",
          margin: "10px",
          padding: "5px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none"
         }} >
          <a href="/">&#x2B05;</a>
        </button>
      </>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ts" element={<Ts />} />
          <Route path="/ti" element={<Ti />} />
          <Route path="/ti1" element={<Ti1 />} />
          <Route path="/ti2" element={<Ti2 />} />
          <Route path="/ti3" element={<Ti3 />} />
          <Route path="/ti4" element={<Ti4 />} />
          <Route path="/ts1" element={<Ts1 />} />
          <Route path="/ts2" element={<Ts2 />} />
          <Route path="/ts3" element={<Ts3 />} />
          <Route path="/ts4" element={<Ts4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
