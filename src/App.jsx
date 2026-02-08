import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirmation" element={<BookingConfirmationPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
