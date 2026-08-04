import './App.css';
import Header from './pages/header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/error/NotFound';
import PostParticipant from './pages/ecc/registration/participant/PostParticipant';
import GetAllParticipants from './pages/ecc/registration/participant/GetAllParticipants';
import UpdateParticipant from './pages/ecc/registration/participant/UpdateParticipant';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/registration" element={<PostParticipant />} />
        <Route  path="/participants" element={<GetAllParticipants />} />
        <Route  path="/participant/UpdateParticipant/:id" element={<UpdateParticipant />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
