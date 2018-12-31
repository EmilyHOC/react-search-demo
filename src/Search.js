import React, {Component} from 'react';
import './App.css'

class Search extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Search Github Users<br/>
                        <input className="input" ref="user"/>
                        <button className="search" onClick={this.searchUsers}>Search</button>

                </header>

            </div>
        );
    }
    searchUsers=(e)=>{
        let input=this.refs.user.value;
        this.props.search(input);
    }

}


export default Search;


