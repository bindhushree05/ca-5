import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookStore from '../src/components/BookStore';
import RegistrationForm from '../src/components/RegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;