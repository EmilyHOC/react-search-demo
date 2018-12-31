import React, {Component} from 'react';
import Search from "./Search";
import List from "./List";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:''
        }
        
    }
    search=(user)=>{
        this.setState({
            user
        })
    }
    render() {
        let {user}=this.state;
        return (
            <div>
                <Search search={this.search}/>
                <List user={user}/>
            </div>
        );
    }
}

export default App;
