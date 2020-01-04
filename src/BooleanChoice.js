import React from "react";
import Price from "./Price";

class BooleanChoice extends React.Component {
  render = () => {
    // On destructure les props
    // name: string
    // selected: boolean
    // price: number
    // onChange: (selectedValue: boolean) => {}
    const { name, selected, price, onChange } = this.props;

    return (
      <div>
        <h4 className="choice-name">{name}</h4>
        <div className="horizontal-choice">
          <div
            className={"horizontal-item" + (selected ? "" : " selected")}
            onClick={() => onChange(false)}
          >
            <span className="choice-name">Aucun</span>
            {selected && <Price value={-price} />}
          </div>
          <div
            className={"horizontal-item" + (selected ? " selected" : "")}
            onClick={() => onChange(true)}
          >
            <span className="choice-name">{name}</span>
            {!selected && <Price value={price} />}
          </div>
        </div>
      </div>
    );
  };
}

export default BooleanChoice;
