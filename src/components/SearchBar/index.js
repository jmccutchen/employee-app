import React from 'react';

export default class SearchBar extends React.Component {

    

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault()

    }
    
    render() {
        return(
            <div className="text-center mb-4">
                <form >
                    <input 
                    handleInputChange={this.handleInputChange}
                    handleSubmit = {this.handleSubmit}
                    placeholder="Search employee name"
                    className= "p-2"
                    >
                    </input>
                    <button
                    className= "p-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
    
}