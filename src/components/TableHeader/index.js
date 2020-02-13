import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        return (
            <div className= "row"> 
                <div className = "col-md-2">Image</div>
                <div className = "col-md-2">Name</div>
                <div className = "col-md-2">Phone</div>
                <div className = "col-md-2">Email</div>
                <div className = "col-md-2">DOB</div>
            </div>

        )
    }

}

