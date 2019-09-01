import React, { Component } from 'react'
import '../css/App.css'
import * as data from '../starwarsData.json'

const getSpecies = ({species}) => species[0] === 'human'
const getName = person => person.name

const results = data
    .filter(getSpecies)
    .map(getName)

class AppSW extends Component {
  
 

  render() {
    console.log('Data: ', data)
    console.log('Species', data.map(person => person.species[0] === 'human'))
    console.log('humans: ', results)
    return (
      <div className="App">
         <h4>Star Wars data!</h4>
       
      </div>
    )
  }
}

export default AppSW