import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        // passed down funciton from app component
        // allows to pass current searched term value to app component
        // app component can will make ajax request and set the state for the term
        this.props.onFormSubmit(this.state.term);

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;