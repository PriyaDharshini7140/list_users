import  React, { useEffect, useState }  from "react";
import Sample from './components/Sample';
import Card from "./components/Card"
import Axios from "axios";

 
const App=()=>{
  const [Data,setData] = useState([]);
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then(
      (res)=>setData(res.data)
       )
    },[])
    const [LoadType,setLoadType] = useState(Boolean(false))
   console.log(Data);
  console.log(LoadType);
    const search=(b)=>{
  const d= Data.filter(e => e.name === b)
  console.log(d);
  setData(d)
  setLoadType(Boolean(true))
    }
  

return(
  
 <div>
<center>
<Sample name={search} ></Sample>
</center>
<Card data={Data}load={LoadType}></Card>
  </div>
  
)
}
export default App;
