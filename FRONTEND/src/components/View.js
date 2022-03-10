import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function View(){
const params=useParams()
const id=params.id
const[data,setData]=useState([])
const navigate = useNavigate();
const handleClick =()=>{
    navigate('/')
}
console.log(id)

const url=`http://localhost:8081/api/android/id/${id}`
const fetchdata=()=>{
    axios.get(url)
    .then((res)=>{
        setData(res.data)
    })

}
useEffect(() => {
    fetchdata()
   
}, [])
    return(
        <div>       
            <table>
                <tr>
                    <th>Brandname</th>
                    <th>Apps</th>
                    <th>Service Provider</th>
                    <th>Service Type</th>
                    <th>Cost</th>
                    
                </tr>
            <tr>
                <td>{data.brandname}</td>
                <td>  {data.apps}</td>                                
                <td> {data.serviceprovider} </td>
                <td>{data.servicetype} </td>
                <td> {data.cost}</td>
                <td><img alt={data.brandname} src={data.image} /></td>
            </tr>
            </table>
            <button onClick={handleClick}>Exit</button>
        </div>
    )
}
export default View;