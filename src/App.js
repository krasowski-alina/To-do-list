import image from './work.jpg';
import './App.css';
import { Plans } from './Plans';

function App() {
  return (
    <div className="App">
      <div className="container"><img src={image} className="woman-image"alt='working woman'/></div>
      <div className="container"><h1>What are your plans for today?</h1></div>
      <Plans/>
    </div>
  );
}

export default App;
