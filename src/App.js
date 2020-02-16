import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
// import TableData from './components/TableData';
// import TableHeader from './components/TableHeader';
import axios from 'axios';


class App extends React.Component {

  state = {
    employees: [],
    order: "desc"
    
  }

  


  componentDidMount = () => {
    this.renderEmployee()
  }

  renderEmployee = () => {
    axios.get('https://randomuser.me/api/?results=50&nat=us')
      .then((response) => {
        
        this.setState(
          { employees: [...response.data.results] }
        )
      })
      
  }

  sortBy(){
    console.log(this.state)
    if(this.state.order === 'desc'){
        this.state.employees.sort((a,b) => a.name.last > b.name.last ? 1: -1)
        this.setState(
            { order: 'asc' }
          )
          console.log(this.state.order, 'desc')
        
    } else {
        this.state.employees.sort((a,b) => a.name.last < b.name.last ? 1: -1)
        this.setState(
            { order: 'desc' }
            
        )
        console.log(this.state.order, 'asc')
    }
};

  render() {
    
    return (
      <div>
        <PageHeader />
        <SearchBar />
        <TableArea 
          employees= {this.state.employees}
          sortBy= {this.sortBy.bind(this)}
          order = {this.state.order}
          />
      </div>


    );
  }
}

export default App;


