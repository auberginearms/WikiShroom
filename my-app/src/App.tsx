import { ReactElement, useState } from "react";
import "./App.css";
import cordyceps1 from "./cordyceps1.jpg";
import cordyceps2 from "./cordyceps2.jpg";
import cordyceps3 from "./cordyceps3.jpg";
import { ImageText } from "./ImageText";

function App(): ReactElement {
  const [CordycepImage, setImage] = useState(1);
  function cordycepCycler() {
    if (CordycepImage < 3) {
      setImage(CordycepImage + 1);
    }
    if (CordycepImage === 3) {
      setImage(1);
    }
  }
  if (CordycepImage === 1)
    return (
      <ImageText
        image={cordyceps1}
        text="cordycep lord"
        onClickResult={cordycepCycler}
      ></ImageText>
    );
  if (CordycepImage === 2)
    return (
      <ImageText
        image={cordyceps2}
        text="cordycep pleb"
        onClickResult={cordycepCycler}
      ></ImageText>
    );
  return (
    <ImageText
      image={cordyceps3}
      text="cordycep deity"
      onClickResult={cordycepCycler}
    ></ImageText>
  );
}

export default App;
