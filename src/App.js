import { Form } from './Components/Form.js';
import Counter from './Components/Counter.js';
import Gallery from './Components/Gallery.js';
import { BucketList } from './Components/BucketList.js';


export default function App() {

  return (
    <>
      <Gallery />
      <Counter/>
      <Form/>
      <BucketList/>
    </>
  );
}
