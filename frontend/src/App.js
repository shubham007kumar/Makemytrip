
import './App.css';
import { AboveFooterSection } from './Components/AboveFooterSection';
import { BelowTravelBlogSection } from './Components/BelowTravelBlogSection';
import { BusesFromSection } from './Components/BusesFromSection';
import { TravelVlogSection } from './Components/TravelVlogSection';

function App() {
  return (
    <div className="App">
      <div style={{height:"100px"}}></div>
    <BusesFromSection/>
    <TravelVlogSection/>
    <BelowTravelBlogSection/>
    <AboveFooterSection/>
    </div>
  );
}

export default App;
