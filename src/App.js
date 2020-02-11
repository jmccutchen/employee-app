import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import SearchBar from './components/SearchBar';
import TableArea from './components/TableArea';
import TableData from './components/TableData';
import TableHeader from './components/TableHeader';

class App extends React.Component {
  state = {
    employees: [
      {
        name: "",
        title: "",
      }
    ]
  }


  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <SearchBar></SearchBar>
        <TableArea employees={this.state.empoloyees} />
        <TableHeader></TableHeader>
        <TableData></TableData>
      </div>


    );
  }
}

export default App;
