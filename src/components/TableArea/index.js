import React from 'react';
import TableHeader from '../TableHeader';
import TableData from '../TableData';


export default class TableArea extends React.Component {

    render() {

        return (

            <div className="container table-responsive">
                <table className="table table-bordered table-hover">


                    <TableHeader
                        sortBy={this.props.sortBy}
                        order={this.props.order}
                    />

                    {this.props.employees.map((employee) => (

                        <TableData
                            image={employee.picture.thumbnail}
                            name={employee.name.first + " " + employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}

                        />

                    ))}
                </table>
            </div >
        )
    }

}