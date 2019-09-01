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

  //Filter
    // with ES6 there is no need to add a conditional + return like: 
    // (age => age >= 21 ? return trye : null)
    canDrink = ages => ages.filter(age => age >= 21)
    
    //Filter Retail companies
    retailCompaniesBulky = companies => companies.filter(function(company) {
      if(company.category === 'Retail'){
        return true
      } else {
        return null
      }
    })
    //ES6
    retailCompanies = companies => companies.filter(company => company.category === 'Retail')

    // 80s companies
    backToThe80s = companies => companies.filter(company => (company.start >= 1980 && company.start < 1990))

    //Laster 10 years or more
    longLasting = companies => companies.filter(company => (company.end - company.start >= 10))

//Map
  companyNamesArray = companies => companies.map(company => company.name)
  companyNamesWithInfoArray = companies => companies.map(company => `${company.name} founded in ${company.start}`)

//Sort
  sortedCompanies = companies => companies.sort((company1, company2) => (company1.start > company2.start ?  1 : -1))
  sortedLongLastingCompanies = companies => companies.sort((company1, company2) => ((company1.end - company1.start) > (company2.end - company2.start) ?  1 : -1))

//Reduce
  ageSum = ages => ages.reduce((total, age) => total + age, 0)

//Combo 
 averageAge = ages => ages.reduce((ageA, ageB) => ageA + ageB, 0 ) / ages.length
 

  render() {
    console.log('State: ', this.state)
    console.log('Allowed to drink: ', this.canDrink(this.state.ages))
    console.log('Retail companies: ', this.retailCompanies(this.state.companies))
    console.log('80\'s: ', this.backToThe80s(this.state.companies))
    console.log('Longlasting: ', this.longLasting(this.state.companies))
    console.log('Names: ', this.companyNamesArray(this.state.companies))
    console.log('Names + info: ', this.companyNamesWithInfoArray(this.state.companies))
    console.log('Sorted companies: ', this.sortedCompanies(this.state.companies))
    console.log('Sorted longlasting companies: ', this.sortedLongLastingCompanies(this.state.companies))
    console.log('AgeSum: ', this.ageSum(this.state.ages))
    console.log('Average age: ', this.averageAge(this.state.ages))

    return (
      <div className="App">
         <h4>It's in the console >>></h4>
        {/* <h4>Arrays:</h4>
        <ul>{this.state.companies.map(company =>
          <li key={`company--${company.name}`}>{company.name}</li>
          )}
        </ul> */}
      </div>
    )
  }
}

export default App