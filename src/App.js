import  React, { useEffect, useState }  from "react";
import Sample from './components/Sample';
import Card from "./components/Card"
import Axios from "axios";
//  export const nameContext = React.createContext();
 
const App=()=>{
  const [Data,setData] = useState([]);
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then(
      (res)=>setData(res.data)
       )
    },[])
   console.log(Data);
    const search=(b)=>{
  const d= Data.filter((e)=> {
     if(e.name === b)
   console.log(e);
    setData(e)
     })
 }
return(
 <div>
<center>
<Sample name={search}></Sample>
  <Card data={Data}/>
 
</center>
  </div>
  
)
}
export default App;
