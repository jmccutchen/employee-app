import React from 'react';
import {FaSort} from 'react-icons/fa';


export default class TableHeader extends React.Component {
    
    
    render() {
        
        return (
            
                <thead>
                    <tr className="bg-info text-center">
                        <th scope="col">Image</th>
                        <th scope="col ">Name<FaSort
                        onClick={() => this.props.sortBy()}
                        /></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            
        )
    }

}

