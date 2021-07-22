import './App.css';
import Routes from './Components/Routes/Routes';
import { AboveFooterSection } from './Components/AboveFooterSection';
import { BelowTravelBlogSection } from './Components/BelowTravelBlogSection';
import { BusesFromSection } from './Components/BusesFromSection';
import { TravelVlogSection } from './Components/TravelVlogSection';

function App() {
  return (
    <div className="App">
    <Routes/>
    <BusesFromSection/>
    <TravelVlogSection/>
    <BelowTravelBlogSection/>
    <AboveFooterSection/>
    </div>
)}
export default App;
