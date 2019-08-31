import React, { Component } from 'react'
import '../css/App.css'

const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      companies,
      ages
    }
    }
  
  //forEach
  
   companyNames = companies => companies.forEach(company => console.log(company.name))
   companyName = companies => companies.forEach(company => console.log(company.name))

  render() {
    console.log('State: ', this.state)
    return (
      <div className="App">
        <h4>Arrays:</h4>
        <ul>{this.state.companies.map(company =>
          <li key={`company--${company.name}`}>{company.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default App