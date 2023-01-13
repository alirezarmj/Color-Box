import { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";



function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const[isDarkText,setIsDarktext]=useState(true);


  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}

      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarktext={setIsDarktext}
      />
    </div>
  );
}

export default App;
