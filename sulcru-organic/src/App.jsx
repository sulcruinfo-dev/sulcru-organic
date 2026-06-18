import { Routes, Route } from 'react-router-dom';
import SulcruOrganic from './SulcruOrganic';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SulcruOrganic />} />
      <Route path="/about" element={<SulcruOrganic />} />
      <Route path="/products" element={<SulcruOrganic />} />
      <Route path="/product" element={<SulcruOrganic />} />
      <Route path="/ingredients" element={<SulcruOrganic />} />
      <Route path="/benefits" element={<SulcruOrganic />} />
      <Route path="/contact" element={<SulcruOrganic />} />
    </Routes>
  );
}
 
