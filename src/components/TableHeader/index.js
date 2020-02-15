import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        return (
            
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            
        )
    }

}

