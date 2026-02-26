import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import Mentoring from './pages/Mentoring';
import Teams from './pages/Teams';

import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';



function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="mentoring" element={<Mentoring />} />
          <Route path="teams" element={<Teams />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
