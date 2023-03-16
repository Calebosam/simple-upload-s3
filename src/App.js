import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Upload />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
