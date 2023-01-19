import React, { Component } from 'react'
import './App.css';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Title from '../components/title';



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField : ""
    }

  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then(users => {
      this.setState({robots:users})
    })
  }

  onSearchFieldChange=(event)=>{
    this.setState({searchField : event.target.value})
  }

  render(){
    const {robots, searchField} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div>
        <Title/>
        <SearchBox onSearchFieldChange = {this.onSearchFieldChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
};

export default App;
