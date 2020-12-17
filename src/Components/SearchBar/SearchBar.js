import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleKeyUp(e) {
        if(e.keyCode === 13 || e.charCode === 13 ) {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input type="search" placeholder="Enter A Song, Album, or Artist" 
                onChange={this.handleTermChange} onKeyUp={this.handleKeyUp} />
                 <button onClick={this.search}  className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

