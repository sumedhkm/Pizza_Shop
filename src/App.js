import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import Pickoftheweek from './Components/Pickoftheweek';
import Comments from './Components/Comments';                            //For Bootstrap css
function App() {
  return (
    <div className="App">
      <Appbar/>
      <Banner/>
      <Menu/>
      <Pickoftheweek/>
      <Comments/>
    </div>
  );
}

export default App;
