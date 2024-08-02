import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import ZoomSlide from './scenes/ZoomSlide';
const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loader />} />
        <Route path="/Home" element={<ZoomSlide />} />
      </Routes>
    </AnimatePresence>
)}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;