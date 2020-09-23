import React, {Component} from 'react';


class Todoitem  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urgency: 'red'
     }
  }

  handleClick = () => {
    this.setState ({
      urgency:
      this.state.urgency === 'red' ? 'green':
        this.state.urgency === 'green' ? 'yellow':
          this.state.urgency === 'yellow' ? 'red':
          'red'
    })
  }

  render() {
    return (
      <li onClick ={this.handleClick} style={{color: this.state.urgency}}>
        {this.props.item}
      </li>
    );
  }
}

export default Todoitem;


{/* <button onClick={() => props.removepoop(index)}>Remove</button> */}