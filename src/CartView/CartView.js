import React from 'react';
import './CartView.css';
import Total from '../Total/Total'

class CartView extends React.Component {
  render() {
      const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
          return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {this.props.currency.format(selectedOption.cost)}
              </div>
            </div>
          );
        });

      return (
        <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <Total
            currency={this.props.currency}
            selected={this.props.selected}/>
          </div>
        </section>
      );
    }
}

export default CartView;
