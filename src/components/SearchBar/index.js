import React from 'react';

export default class SearchBar extends React.Component {

    

    

    render() {
        return(
            <div className="text-center mb-4">
                <form >
                    <input 
                    onChange={this.props.handleInputChange}
                    value={this.props.search}
                    placeholder="Search by last name"
                    className= "p-2"
                    >
                    </input>
                    
                </form>
            </div>
        )
    }
    
}