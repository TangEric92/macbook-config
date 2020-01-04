import React from "react";
import macbook from "./macbook.jpeg";
import "./App.css";
import VerticalChoice from "./VerticalChoice";
import BooleanChoice from "./BooleanChoice";
import Price from "./Price";

const options = {
  processor: [
    {
      name:
        "Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)",
      price: 0
    },
    {
      name:
        "Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)",
      price: 360
    }
  ],
  memory: [
    { name: "16 Go de mémoire DDR4 à 2 400 MHz", price: 0 },
    { name: "32 Go de mémoire DDR4 à 2 400 MHz", price: 480 }
  ],
  gpu: [
    { name: "Radeon Pro 555X avec 4 Go de mémoire GDDR5", price: 0 },
    { name: "Radeon Pro 560X avec 4 Go de mémoire GDDR5", price: 120 }
  ],
  storage: [
    { name: "SSD de 256 Go", price: 0 },
    { name: "SSD de 512 Go", price: 240 },
    { name: "SSD de 1 To", price: 480 },
    { name: "SSD de 2 To", price: 960 },
    { name: "SSD de 4 To", price: 1920 }
  ]
};

class App extends React.Component {
  state = {
    processor: 0,
    memory: 0,
    gpu: 0,
    storage: 0,
    keyboard: 0,
    finalCut: false,
    logicPro: false
  };

  render = () => {
    const finalCutPrice = this.state.finalCut ? 329.99 : 0;
    const logicProPrice = this.state.logicPro ? 229.99 : 0;
    const total =
      2699 +
      options.processor[this.state.processor].price +
      options.memory[this.state.memory].price +
      options.gpu[this.state.gpu].price +
      options.storage[this.state.storage].price +
      finalCutPrice +
      logicProPrice;

    return (
      <div>
        <div>
          <header />
          <div className="produc-name">
            <h1>Macbook Pro</h1>
          </div>
          <div className="columns">
            <div className="macbook">
              <img src={macbook} />
            </div>
            <div className="column">
              <h2>Personnalisez votre MacBook Pro 15 pouces - Gris sidéral</h2>
              <p className="recap">
                {options.processor[this.state.processor].name}
              </p>
              <p className="recap">Écran Retina avec affichage True Tone</p>
              <p className="recap">Touch Bar et Touch ID</p>
              <p className="recap">{options.memory[this.state.memory].name}</p>
              <p className="recap">{options.gpu[this.state.gpu].name}</p>
              <p className="recap">
                {options.storage[this.state.storage].name}
              </p>
              <p className="recap">Quatre ports Thunderbolt 3</p>
              <div className="options">
                <VerticalChoice
                  name="Processeur"
                  options={options.processor}
                  selected={this.state.processor}
                  onSelect={processorIndex => {
                    this.setState({ processor: processorIndex });
                  }}
                />

                <VerticalChoice
                  name="Mémoire"
                  options={options.memory}
                  selected={this.state.memory}
                  onSelect={memoryIndex => {
                    this.setState({ memory: memoryIndex });
                  }}
                />

                <VerticalChoice
                  name="Graphisme"
                  options={options.gpu}
                  selected={this.state.gpu}
                  onSelect={gpuIndex => {
                    this.setState({ gpu: gpuIndex });
                  }}
                />

                <VerticalChoice
                  name="Stockage"
                  options={options.storage}
                  selected={this.state.storage}
                  onSelect={storageIndex => {
                    this.setState({ storage: storageIndex });
                  }}
                />

                <h3>Logiciels préinstallés</h3>
                <BooleanChoice
                  name="Final Cut Pro X"
                  selected={this.state.finalCut}
                  price={329.99}
                  onChange={value => {
                    this.setState({ finalCut: value });
                  }}
                />

                <BooleanChoice
                  name="Logic Pro X"
                  selected={this.state.logicPro}
                  price={229.99}
                  onChange={value => {
                    this.setState({ logicPro: value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <Price value={total.toFixed(2)} noSign />
            <button>Ajouter au Panier</button>
          </div>
        </footer>
      </div>
    );
  };
}

export default App;
