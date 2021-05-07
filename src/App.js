import './App.css';
import FingerBoard from './FingerBoard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Finger Board!</p>
      </header>
      <div className="App-body">
        <FingerBoard />
      </div>
    </div>
  );
}

export default App;