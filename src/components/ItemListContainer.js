import React from 'react';

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        greeting: this.props.greeting
    };
  }

  render() {
    return (
        <div style={{color: 'green'}}>
          {this.state.greeting}
        </div>
    );
  }
}

export default ItemListContainer;
