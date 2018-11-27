import React from 'react';
import ReactDOM from 'react-dom';

import {TodoChild} from './TodoChild';
export class TodoList extends React.Component{

    constructor(){
        super();
        this.changestatus=this.changestatus.bind(this);
        this.state={
            tasks:[
                {
                    Hobbie:'Playing',
                    completed:true
                },
                {
                    Hobbie:'Swimming',
                    completed:false
                },
                {
                    Hobbie:'walking',
                    completed:true
                }
            ]
        }
    }

changestatus(Index){
    var tasks=this.state.tasks;
    var task=tasks[Index];
    task.completed=!task.completed;

    this.setState({
        tasks:tasks
    })
  //  console.log(this.state.tasks[Index]);
//debugger;
}

render(){
    return(
        <ul>
            {
        this.state.tasks.map((value,index)=>{
            return <TodoChild key={value} details={value} index={index} Hnadler={this.changestatus}/>
        })
        
            }
        </ul>
    )
}
}
