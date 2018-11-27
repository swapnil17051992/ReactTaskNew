import React from 'react';
import ReactDOM from 'react-dom';

import {ChildPract5} from './ChildPract5';
 export class Pract5 extends React.Component{
    constructor(){
        super();
        this.Name=["Playing","Walking","Swimming","Reading"]
    } 
changestatus(value){
    debugger;
    alert(value);
}

     render(){
         return(
             <div>
                 {
                     this.Name.map((val,index)=>{
                      return  <ChildPract5 index={index} key={val} details={val} value={val} clickHandler={this.changestatus}/>
                     })
                 
                    }
             </div>

         )
     }
 }

 