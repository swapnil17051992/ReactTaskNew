import React from 'react';


//export class TodoChild extends React.Component{
  //  render(){
    //    return(
            //<li onClick={()=>{
            //    this.props.Hnadler(this.props.index)
          //  }} className={this.props.details.completed?'completed':''}>
        //    {this.props.details.Hobbie}
      //      </li>
    //    )
  //  }
//}

export const TodoChild=(props)=>{
    return(
        <li onClick={()=>{
              props.Hnadler(props.index)
           }} className={props.details.completed?'completed':''}>
           {props.details.Hobbie}
           </li>
    )
}
//export default TodoChild;