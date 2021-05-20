import './App.css';
import ControlPanel from './ControlPanel';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Fingerboard!</p>
      </header>
      <div className="App-body">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;