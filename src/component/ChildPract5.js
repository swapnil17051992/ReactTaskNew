import React from 'react';

export const ChildPract5=(props)=>{


    
        return(
            <div>
                <input type="checkbox" value={props.index} onChange={()=>{
                    props.clickHandler(props.details);
                }}/>{props.details}
            </div>
        )
    
}