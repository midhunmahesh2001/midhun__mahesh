import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Certificates from './Components/Certificates/Certificates';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/midhun__mahesh/" element={
          <>
            <Nav />
            <Header />
            <Projects />
            <Certificates />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
