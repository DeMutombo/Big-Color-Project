import './App.css';
import Pallette from './Components/Palette';
import seedColors from './Components/seedColors';

function App() {
  return (
    <div className="App">
      <Pallette {...seedColors[4]} />
    </div>
  );
}

export default App;
