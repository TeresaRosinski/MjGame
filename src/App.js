import './App.css';
import Intro from './components/Intro.jsx';
import Story from './components/Story.jsx';
import Instructions from './components/Instructions';
import Practice from './components/Practice'

function App() {
  return (
    <div className="App">
      <Intro />
      <Story />
      <Instructions />
      <Practice />
    </div>
  );
}

export default App;
