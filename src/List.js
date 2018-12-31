import React, {Component} from 'react';
import './App.css'
import axios from 'axios';

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            firstView:true,
            loading:false,
            users:null,
            error:null
        }
    }
    render() {
        let {firstView,loading,users}=this.state;
            if(firstView){
               return <h2 className="firstView">enter name to search</h2>
            }else if(loading){
                return <h2>Loading</h2>
            }else if(users){
                return (
                    <div className="content">
                        {
                            users.map((item,index)=>{
                                return (
                                    <div className="card" key={index}>
                                        <a href="item.html_url">
                                            <img src={item.avatar_url} alt=""/>
                                        </a>
                                        <p>{item.login}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }else{
                return <p>暂时没有匹配结果！！！</p>
            }


    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            firstView:false,
            loading:true
        })
        let url=`https://api.github.com/search/users?q=${nextProps.user}`;
        axios.get(url).then((response)=>{
            let data=response.data;
            this.setState({
                loading:false,
                users:data.items
            })
        })
        .catch((error)=>{
            this.setState({
                loading:false,
                error
            })
        })

    }
}

export default List;