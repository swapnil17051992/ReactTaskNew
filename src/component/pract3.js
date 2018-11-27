import React from 'react';
import ReactDOM from 'react-dom';

import { RadioGroup, RadioButton } from 'react-radio-buttons';
export class Test extends React.Component{
    constructor(){
        
        super();
        this.Hobies=['Playing','Cricket','Chess','Swimming']
        this.Getvalue=this.Getvalue.bind(this);
    }

    Getvalue(Name)
    {
        debugger;
        alert(Name);
    }
    render(){
        return(
            
            
            <RadioGroup>

                {
                    this.Hobies.map(function(name){
                      return <RadioButton key={name} Name={name} details={name}
                      onClick={(a)=>{this.Getvalue(a)}}
                       >{name}</RadioButton>
                      
                    })
                }
            </RadioGroup >
           
        )
    }
}
