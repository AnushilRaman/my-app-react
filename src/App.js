import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './Components/Gallery.js';
import Profile from './Components/Profile.js';
import Clock from './Components/clock.js';
import { people } from './Components/data.js';
import { getImageUrl } from './Components/utils.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time
}


function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div className="App">
      <section>
        <Gallery />
        <Profile />
        {/* <TodoList /> */}
      </section>
      <p>
        Pick a color.
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleDateString() + ' ' + time.toLocaleTimeString()} />
      <List/>
    </div>
  );
}

export default App;


const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
//https://i.imgur.com/7vQD0fPs.jpg
export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + '' + person.imageId + '' + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


export function List() {
  const chemistsList = people.filter(x=>x.profession==='chemist').map(person=> 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const everyoneList = people.filter(x=>x.profession!=='chemist').map(person=> 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{everyoneList}</ul>
      <h1>Chemist</h1>
      <ul>{chemistsList}</ul>
    </article>
  );
}
