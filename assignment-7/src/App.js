import "./App.css";
import { Checkbox } from "./Interview/Checkbox";
import { Dropdown } from "./Interview/Dropdown";
import { FormHandler } from "./Interview/FormHandelar";
import { InputCounter } from "./Interview/InputCounter";
import { LoginValidation } from "./Interview/LoginValidation";
import { ToogleText } from "./Interview/ToogleText";
import { Parent } from "./components/Parent";

function App() {
  return (
    <div className="App">
      {/* <Dropdown/> */}
      <FormHandler/>
    </div>
  );
}

export default App;
