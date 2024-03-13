import "./App.css";
import List from './List';
import Name from "./Name";
import Greetings from "./Greetings";

function App() { 
  return (
    <>
      <div>
        <List />
        <Name />
        <Greetings/>
        {/* <h1 className="heading" style={customStyle}>{greeting}</h1> */}
      </div>
    </>
  );
}

export default App;
