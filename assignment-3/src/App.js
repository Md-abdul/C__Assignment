import { useSelector } from "react-redux";
import "./App.css";
import note from "./Redux/reducer";
import InputComponent from "./components/InputComponent";
import DisplayComponent from "./components/DisplayComponent";
function App() {
  const note = useSelector((store) => store.noteReducer.notes);
  console.log(note);

  return (
    <div className="App">
      <div>
        <InputComponent />
      </div>

      <div>
        <DisplayComponent />
      </div>
    </div>
  );
}

export default App;
