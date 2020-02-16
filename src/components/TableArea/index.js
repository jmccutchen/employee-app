import React from 'react';
import TableHeader from '../TableHeader';
import TableData from '../TableData';
import SearchBar from '../SearchBar';

export default class TableArea extends React.Component {



    render() {
        let filteredEmps = 
        this.props.employees.filter(
            (employee) => {
              console.log(employee.name.last)
              return employee.name.last.toLowerCase().includes(
                this.props.search.toLowerCase());
            })

        return (

            <div>

                <SearchBar
                    handleInputChange={this.props.handleInputChange}
                    search={this.props.search}
                />

                <div className="container table-responsive">
                    <table className="table table-bordered table-hover">


                        <TableHeader
                            sortBy={this.props.sortBy}
                            order={this.props.order}
                        />


                        {((this.props.search === '') ? (this.props.employees.map((employee) => (
                            
                            <TableData
                                image={employee.picture.thumbnail}
                                name={employee.name.first + " " + employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                                dob={employee.dob.date}
                            />

                        ))) : (filteredEmps.map((employee) => (
                            
                            <TableData
                                image={employee.picture.thumbnail}
                                name={employee.name.first + " " + employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                                dob={employee.dob.date}
                            />

                        ))))

                        }
                    </table>
                </div >
            </div>
        )
    }

}