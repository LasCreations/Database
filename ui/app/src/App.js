import './App.css';
import Header from './pages/header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/error/NotFound';
import PostStudent from './pages/ecc/student/PostStudent';
import GetAllParticipants from './pages/ecc/student/GetAllParticipants';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/registration" element={<PostStudent />} />
        <Route  path="/participants" element={<GetAllParticipants />} />
        <Route  path="*" element={<NotFound />} />
        
      </Routes>

    </>
  );
}

export default App;
