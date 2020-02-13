import React from 'react';




function TableData(props) {


    // need to loop through API object and get empolyees to render in table
    return (



        <div>
            <div className="img-container">
                <img alt={props.name} src={props.thumbnail} />
            </div>
            <div> {props.name} </div>
            <div> {props.phone} </div>
            <div> {props.email} </div>
            <div> {props.dob} </div>



        </div>

    )
}

export default TableData;