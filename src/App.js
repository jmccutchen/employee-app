import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
import TableData from './components/TableData';
import TableHeader from './components/TableHeader';
import axios from 'axios';

class App extends React.Component {
  state = {
    employees:[]
  }

  componentDidMount = () => {
    this.renderEmployee()
  }

  renderEmployee = () => {
    axios.get('https://randomuser.me/api/?results=50&nat=us')
      .then((response) => {
      console.log(response.data.results)
      
        this.setState(
         
          {employees: [...response.data.results]}
        )
      })
      .then(()=>{console.log(this.state.employees)})

  }

  render() {
    return (
      <div>
        <PageHeader />
        <SearchBar />
        <TableArea />
        <TableHeader />
        {this.state.employees.map((employee) => ( 
          <TableData 
          image= {employee.picture.thumbnail}  
          name= {employee.name.first}
          phone= {employee.phone}
          email= {employee.email}
          dob= {employee.dob.date}
            
          />
        )  )}
      </div>


    );
  }
}

export default App;

 // {
          //   image: response.results.picture.thumbnail,
          //   name: response.results.name.first + " " + response.results.name.last,
          //   phone: response.results.phone,
          //   email: response.results.email,
          //   dob: response.results.date,
          // }
