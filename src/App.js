import { Form } from './Components/Form.js';
import Counter from './Components/Counter.js';
import Gallery from './Components/Gallery.js';
import { BucketList } from './Components/BucketList.js';
import { LightSwitch } from './Components/eventHandler.js';


export default function App() {

  return (
    <>
      <LightSwitch />
      <br /><br /><br />
      <Gallery />
      <Counter />
      <Form />
      <BucketList />
    </>
  );
}


