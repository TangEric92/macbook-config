import React from "react";

class Price extends React.Component {
  render = () => {
    let prefix = "+";
    const { value, noSign } = this.props;
    if (value < 0) {
      prefix = "-";
    }

    if (noSign) {
      prefix = "";
    }

    if (value === 0) {
      return null;
    }

    return prefix + " " + Math.abs(value) + " €";
  };
}

export default Price;
