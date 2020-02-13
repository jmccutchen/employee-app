import React from 'react';

export default class SearchBar extends React.Component {

    state = {
        search: "",
        employees: []
    };

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault()

    }
    
    render() {
        return(
            <div>
                <form>
                    <input 
                    handleInputChange={this.handleInputChange}
                    handleSubmit = {this.handleSubmit}
                    >
                    </input>
                    <button
                    
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
    
}