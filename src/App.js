
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuestionsPage from './Pages/QuestionsPage';
import Result from './Pages/Result';

function App() {
  return (
    <div className="App">
      <h1>Test Portal</h1>
      <Router>
        <Routes>
          <Route path="/" exact element={<QuestionsPage/>} />
          <Route path="/result" element={<Result />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
