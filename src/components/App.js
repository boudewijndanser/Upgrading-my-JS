import React, { Component } from 'react'
import '../css/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name:undefined,
        age:'25',
        hometown:'Antwerp',
        favourites: {
          color: 'yellow',
          food: 'curry'
        }
      }
    }
  }

  changeState = () => {
    this.setState({
      person: {
        name:'Jack',
        age:'25',
        hometown:'Dordrecht',
        favourites: {
          color: 'yellow',
          food: 'curry'
        }
      }
     })
     console.log('this.state.person: ',this.state.person)
  }

  render() {
    console.log('this.state.person: ',this.state.person)

    // Destructuring for easy acces
    let { age, hometown, favourites: {color, food} } = this.state.person 
    let { name = "default" } = this.state.person

    console.log('Easy acces examples',{name},{age})

    return (
      <div className="App">
        <h4>From state:</h4>
        <p>My name is {this.state.person.name}, I'm from {this.state.person.hometown} and am {this.state.person.age} years old. You can wake me up for {this.state.person.favourites.food} and paint my walls {this.state.person.favourites.color}</p>
        <h4>From destructuring:</h4>
        <p>My name is {name}, I'm from {hometown} and am {age} years old. You can wake me up for {food} and paint my walls {color}</p> 
        <button onClick={() => {this.changeState()}}>setState</button>
      </div>
    )
  }
}

export default App
