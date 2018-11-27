import React from 'react';
import ReactDOM from 'react-dom';


export class Parent extends React.Component{
    constructor(){
        super();
        this.changestatus=this.changestatus.bind(this);
        this.firstname="swapnil kurjekar";
        this.userdetails={
        User:[
            {
                name:'swapnil',
                completed:true
                
            },
            {
                name:'ram',
                completed:false
            }
        ]
    }
    }

    changestatus(details){
        debugger;
        alert(details.name);
        //alert(this.userdetails.User[index])
    }
    render(){
        return(
            <ul>
                
                {
                    this.userdetails.User.map((name,index)=>
                    {
                        return <Child details={name} key={name} Index={index} clickHnadler={this.changestatus} />
                    })
            
                }
            </ul>
        )
    }
}

class Child extends React.Component{
    render(){
        return(
            <li onClick={()=>{
                this.props.clickHnadler(this.props.details)
            }} className={this.props.details.completed?'completed':''}>
            {this.props.details.name}
            </li>
        )
    }
}