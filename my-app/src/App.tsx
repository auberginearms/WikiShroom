import { ReactElement, useState } from "react";
import "./App.css";
import cordyceps1 from "./cordyceps1.jpg";
import cordyceps2 from "./cordyceps2.jpg";
import cordyceps3 from "./cordyceps3.jpg";
import { ImageText } from "./ImageText";

function App(): ReactElement {
  const cordycepsData = [
    { image: cordyceps1, text: "cordycep lord" },
    { image: cordyceps2, text: "cordycep pleb" },
    { image: cordyceps3, text: "cordycep deity" },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/590.png",
      text: "cordycep noob",
    },
    {
      image:
        "https://static.wikia.nocookie.net/pokemon/images/d/de/286Breloom.png",
      text: "fake cordycep",
    },
    {
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/70/0755Morelull.png/900px-0755Morelull.png",
      text: "cordycep fairy",
    },
  ];

  const [cordycepImage, setCordycepImage] = useState(0);
  function cordycepCycler() {
    if (cordycepImage < cordycepsData.length - 1) {
      return setCordycepImage(cordycepImage + 1);
    }
    if (cordycepImage === cordycepsData.length - 1) {
      return setCordycepImage(0);
    }
  }
  return (
    <ImageText
      image={cordycepsData[cordycepImage].image}
      text={cordycepsData[cordycepImage].text}
      onClickResult={cordycepCycler}
    ></ImageText>
  );
}

export default App;
