import './App.css';
import Search from "./components/search/search";
import CurrentWeather from './components/current-weather/CurrentWeather';
import forecast from './components/forecast/forecast';
function App() {
  const [CurrentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }
    return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
      <forecast />
    </div>
  );
}

export default App;
