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
          <Profile />
          <TodoList/>
        </section>
      </header>
    </div>
  );
}

export default App;

export function TodoList() {
  return (
    <diV>
    // This doesn't quite work!
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      ></img>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </diV>
  );

}

