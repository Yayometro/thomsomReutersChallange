

import Navbar from './Navbar';
import NoteManager from './NoteManager';

const title = "Note Manager";
function App()  {

  return (
    <div className=" w-full h-full bg-gray-100 flex justify-center items-center">
      <Navbar />
      <p>{title}</p>
      <NoteManager />
    </div>
  )
}

export default App
