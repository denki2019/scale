import './App.css';
import FingerBoard from './FingerBoard';
import ControlPanel from './ControlPanel';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Fingerboard!</p>
      </header>
      <div className="App-body">
        <FingerBoard />
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;