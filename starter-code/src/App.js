import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iron Nutrition</h1>
        </header>
        <p className="App-intro">
          <div className='container'>
          <AddFood {...FoodBox} clickToInsert={() => this.handleChange()} addTheFood={() => this.addFoodHandler()}/> 

          </div>
          {/* {
            addFoodHandler = (FoodBox) => {
              const foodsCopy = [...this.state.foods];
              foodsCopy.push(FoodBox);
              this.setState({
                foods: foodsCopy
              })
            }
          } */}

          {foods.map(f => <FoodBox name={f.name} image={f.image} calories={f.calories} quantity={f.quantity}></FoodBox>)}
        </p>
      </div>
    );
  }
}

export default App;
