import { Routes, Route } from 'react-router-dom';
import SulcruOrganic from './SulcruOrganic';
import SoilImproverPage from './pages/SoilImproverPage';
import SolutionsPage from './pages/SolutionsPage';
import AgriculturePage from './pages/AgriculturePage';
import LandscapeTurfPage from './pages/LandscapeTurfPage';
import EnvironmentalRestorationPage from './pages/EnvironmentalRestorationPage';
import NurseryPage from './pages/NurseryPage';
import SeedlingProductionPage from './pages/SeedlingProductionPage';
import CommercialFarmingPage from './pages/CommercialFarmingPage';
import LandscapingGardensPage from './pages/LandscapingGardensPage';
import GolfCoursesPage from './pages/GolfCoursesPage';
import SportsFieldsPage from './pages/SportsFieldsPage';
import EstatesResidentialPage from './pages/EstatesResidentialPage';
import MiningRehabilitationPage from './pages/MiningRehabilitationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SulcruOrganic />} />
      <Route path="/about" element={<SulcruOrganic />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/solutions/agriculture" element={<AgriculturePage />} />
      <Route path="/solutions/agriculture/nurseries" element={<NurseryPage />} />
      <Route path="/solutions/agriculture/seedling-production" element={<SeedlingProductionPage />} />
      <Route path="/solutions/agriculture/commercial-farming" element={<CommercialFarmingPage />} />
      <Route path="/solutions/landscape-turf" element={<LandscapeTurfPage />} />
      <Route path="/solutions/landscape-turf/landscaping-gardens" element={<LandscapingGardensPage />} />
      <Route path="/solutions/landscape-turf/golf-courses" element={<GolfCoursesPage />} />
      <Route path="/solutions/landscape-turf/sports-fields" element={<SportsFieldsPage />} />
      <Route path="/solutions/landscape-turf/estates-residential" element={<EstatesResidentialPage />} />
      <Route path="/solutions/environmental-restoration" element={<EnvironmentalRestorationPage />} />
      <Route path="/solutions/environmental-restoration/mining-rehabilitation" element={<MiningRehabilitationPage />} />
      <Route path="/products" element={<SulcruOrganic />} />
      <Route path="/products/soil-improver" element={<SoilImproverPage />} />
      <Route path="/product" element={<SulcruOrganic />} />
      <Route path="/ingredients" element={<SulcruOrganic />} />
      <Route path="/benefits" element={<SulcruOrganic />} />
      <Route path="/contact" element={<SulcruOrganic />} />
    </Routes>
  );
}
 
