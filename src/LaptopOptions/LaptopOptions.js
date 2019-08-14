import React from 'react';
import './LaptopOptions.css';
import Options from '../Options/Options';

class LaptopOptions extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    console.log(feature + idx)
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
            <Options
              currency={this.props.currency}
              features={this.props.features}
              feature={feature}
              selected={this.props.selected}
              handleUpdate={this.props.handleUpdate}/>
        </fieldset>
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default LaptopOptions;
