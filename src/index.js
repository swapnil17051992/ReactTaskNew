import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Hello} from './component/Hello';

import {Parent} from './component/pract2';
import {Test} from './component/pract3';
import {TodoList} from './component/pract4';
import {Pract5} from './component/pract5';
import {LabelTest} from './component/labelComponent';
class HelloRun extends React.Component{
    render(){
        return(
            <div>
                <a href="#" onClick={()=>{'alert("The link was clicked."); return false'}}>
  Click me
  </a>

            <h2>HellorRun</h2>
            <Hello/>
            </div>
        )
    }
}

class HelloChild extends React.Component{
    render(){
        return(
         <div>  <HelloRun/>
            <Parent/>
            <Test/>
            <Pract5/>
            </div> 
        )
    }
}


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ////ReactDOM.render(
   // element,
   // document.getElementById('root')

   
 // );
ReactDOM.render(<HelloChild/>,document.getElementById('root'));
ReactDOM.render(<TodoList/>,document.getElementById('root'));
ReactDOM.render(<Pract5/>,document.getElementById('root'));
ReactDOM.render(<LabelTest/>,document.getElementById('root'));
