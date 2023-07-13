import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Services from './Services/Services'
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/home'} element={< Home/>} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/*'} element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
