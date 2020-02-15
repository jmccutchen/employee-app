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
    employees: []
  }

  componentDidMount = () => {
    this.renderEmployee()
  }

  renderEmployee = () => {
    axios.get('https://randomuser.me/api/?results=50&nat=us')
      .then((response) => {
        console.log(response.data.results)

        this.setState(

          { employees: [...response.data.results] }
        )
      })


  }


  render() {
    return (
      <div>
        <PageHeader />
        <SearchBar />
        <TableArea employees= {this.state.employees}>
          
        </TableArea>
      </div>


    );
  }
}

export default App;


