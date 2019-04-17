import React, { Component } from 'react';

class AddFood extends Component {

  constructor(props){
      super(props);

      this.state = { 
        name: '',
        image: '',
        calories: '',
        quantity: ''
      }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({     
      name: '',
      image: '',
      calories: '',
      quantity: ''
    })     
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }
  
  render(){
    return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
        <div className="field">
        <label clasName="label">Name:</label>
            <div className="control">
                <input type="text" className="input is-primary" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </div>
        </div>
        <div className="field">
            <label clasNamw="label">Image:</label>
            <div className="control">
            <input type="text" className="input is-primary" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
        </div>
        </div>
        <div className="field">
            <label clasNamw="label">Calories:</label>
            <div className="control">
            <input type="text" className="input is-primary" name="calories" checked={this.state.calories} onChange={(e) => this.handleChange(e)} />
        </div>
        </div>
        <div className="field">
            <label clasNamw="label">Quantity:</label>
            <div className="control">
            <input type="text" className="input is-primary" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
        </div>   
        </div>
            <input class="button is-link" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddFood;