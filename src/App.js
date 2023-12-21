import { Form } from './Components/Form.js';
import Counter from './Components/Counter.js';
import Gallery from './Components/Gallery.js';
import { BucketList } from './Components/BucketList.js';
import { LightSwitch } from './Components/eventHandler.js';
import TrafficLight from './Components/TrafficLight.js';


export default function App() {

  return (
    <>
      <LightSwitch />
      <br />
      <br />
      <TrafficLight />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <Gallery />
      <Counter />
      <BucketList />
      <TrafficLight />
    </>
  );
}


