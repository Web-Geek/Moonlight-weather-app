import './App.css';
import ImagePreloader from './components/ImagePreloader';
import Location from './components/Location';
import NavBar from './components/NavBar';
import ReportCard from './components/ReportCard';
import SearchBar from './components/SearchBar';
import SummaryCard from './components/SummaryCard';
import { SearchContextProvider } from './context/SearchContext';

function App() {

  return (
    <div className="container">
        
      <div className="elements">
        
        <ImagePreloader />
        <SearchContextProvider>
          <NavBar />
          <Location />
          <SearchBar />
          <ReportCard />
          <SummaryCard />
        </SearchContextProvider>
      </div>
    </div>
  );
}

export default App;
