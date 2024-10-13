import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebarr from './components/Sidebarr';
import Home from './pages/Home';
import Register from './pages/Register';
import Birthday from './pages/Birthday';
// import './styles/global.css';
import 'primereact/resources/themes/md-light-deeppurple/theme.css';  // Tema específico do PrimeReact
import 'primereact/resources/primereact.min.css';           // Estilos principais do PrimeReact
import 'primeicons/primeicons.css';                         // Ícones do PrimeReact
import 'primeflex/primeflex.css';                           // Utilitários de layout (opcional)



const App: React.FC = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Sidebarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/birthdays" element={<Birthday />} />
      </Routes>
    </Router>
  );
}

export default App;
