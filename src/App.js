import logo from './logo.svg';
import './App.css';
import Gallery from './Components/Gallery.js';
import Profile from './Components/Profile.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <Gallery />
          <Profile/>
        </section>
      </header>
    </div>
  );
}

export default App;
