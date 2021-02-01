import React, { useState } from 'react';
import { nameContext } from '../App';
 
const Sample=(props)=>{
      const [Name,setName]  = useState('');
//  console.log(Name);
  return(
   <div>
       
     <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>props.name(Name)}>search</button>
      </div>
    )
  
}
export default Sample;