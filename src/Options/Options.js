import React from 'react';
import './Options.css';
import slugify from 'slugify';

class Options extends React.Component {
    render() {
      const feature = this.props.feature;
      console.log(this.props.features);
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.props.handleUpdate(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.currency.format(item.cost)})
              </label>
            </div>
          );
      });
      return (
        options
      );
    }
}

export default Options;
