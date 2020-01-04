import React from "react";
import Price from "./Price";

class VerticalChoice extends React.Component {
  render = () => {
    // On destructure les props
    // name: string
    // options: [{ name: string, price: number }, ...]
    // selected: number (index)
    // onSelect: (selectedValue: number) => {}
    const { name, options, selected, onSelect } = this.props;

    const selectPrice = options[selected].price;

    return (
      <div>
        <h4 className="choice-name">{name}</h4>
        {options.map((option, index) => {
          // option etant un élément de options options[0], options[1], ...
          // index etant la position dans le tableau options options[index]

          let cssClass = "vertical-choice";
          if (index === selected) {
            cssClass += " selected";
          }

          return (
            <div
              className={cssClass}
              onClick={() => {
                // au clic on appelle la props onSelect avec en parametre l'index de l'élément cliqué
                onSelect(index);
              }}
            >
              <span className="choice-name">{option.name}</span>
              <span className="choice-price">
                <Price value={option.price - selectPrice} />
              </span>
            </div>
          );
        })}
      </div>
    );
  };
}

export default VerticalChoice;
