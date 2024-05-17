import './App.css';
import Search from "./components/search/search";
import CurrentWeather from './components/current-weather/CurrentWeather';
function App() {
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }
    return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
