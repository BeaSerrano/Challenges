// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Result from './Result';
import { CalculatorProvider } from './CalculatorProvider';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/resultado" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
