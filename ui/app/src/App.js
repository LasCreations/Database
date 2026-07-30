import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/error/NotFound';
import PostStudent from './pages/ecc/student/PostStudent';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/students" element={<PostStudent />} />
        <Route  path="*" element={<NotFound />} />
        
      </Routes>

    </>
  );
}

export default App;
