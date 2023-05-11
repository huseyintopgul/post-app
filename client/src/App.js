import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/AuthPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';


function App() {
  const [token] = useToken();
  const { modal } = useSelector(state => state.modal)


  return (
    <>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route path='/' element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path='/auth' element={token?.token ? <Link to={'/'} /> : <Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
