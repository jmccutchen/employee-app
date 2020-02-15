import React from 'react';




function TableData(props) {

    

    return (

        <tbody>
            <tr>
                <td className="img-container">
                    <img src={props.image} alt=" employeePicture" />
                </td>
                <td> {props.name} </td>
                <td > {props.phone} </td>
                <td > {props.email} </td>
                <td > {props.dob} </td>
            </tr>
        </tbody>

    )
}

export default TableData;