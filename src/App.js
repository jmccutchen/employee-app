import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import TableArea from './components/TableArea';
import axios from 'axios';


class App extends React.Component {

  state = {
    employees: [],
    order: "desc",
    search: ''

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

  sortBy() {

    if (this.state.order === 'desc') {
      this.state.employees.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
      this.setState(
        { order: 'asc' }
      )

    } else {
      this.state.employees.sort((a, b) => a.name.last < b.name.last ? 1 : -1)
      this.setState(
        { order: 'desc' }
      )

    }
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  }

  filteredEmps() {

      this.state.employees.filter(
        (employee) => {
          console.log(employee.name.last)
          return employee.name.last.toLowerCase().includes(
            this.state.search.toLowerCase());
        })
      }
  

  render() {
    console.log(this.state)
    console.log(this.filteredEmps)
    return (
      <div>
        <PageHeader />

        <TableArea
          employees={this.state.employees}
          sortBy={this.sortBy.bind(this)}
          order={this.state.order}
          handleInputChange={this.handleInputChange.bind(this)}
          filteredEmps={this.filteredEmps.bind(this)}
          search={this.state.search}
        />
      </div>


    );
  }
}

export default App;


