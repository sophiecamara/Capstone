import {useState, useEffect} from 'react';
import{useNavigate, useParams } from "react-router-dom";
import AndroidServices from '../AndroidServices';

function AddAndroidModel () {
     const[ide,setIde]=useState('')
    const[brandname,setBrandname]=useState('')
    const[apps,setApps]=useState('')
    const[cost,setCost]=useState('')
    const[serviceprovider,setServiceprovider]=useState('')
    const[servicetype,setServicetype]=useState('')
    const[image,setImage]=useState('')
    const navigate=useNavigate();
    const{id}=useParams()
      

            
const saveAndroidModel = (e) => {
        e.preventDefault();
        const android={
          
           brandname,
           apps,
           cost,
           serviceprovider,
           servicetype,
           image,
        };
        if (id) {
           
            //update
            AndroidServices.updateAndroid(android,id)
                .then((res) => {
                    console.log('Model updated successfully', res.data);
                    navigate ("/");
                })
                .catch(error => {
                    console.log('Oops', error);
                }) 
        } else {
            //create
            AndroidServices.createAndroidModel(android)
            .then(res => {
                console.log("Model added successfully", res.data);
                navigate("/");
            })
            .catch(error => {
                console.log('Oops', error);
            })
        }
    
    }//closing save method

useEffect(()=>{
    if(id){
    AndroidServices.getAndroidsById(id)
    .then ((res)=>{
        
         setIde(res.data.ide);
        setBrandname(res.data.brandname);
        setApps(res.data.apps);
        setServiceprovider(res.data.serviceprovider);
        setServicetype(res.data.servicetype);
        setCost(res.data.cost);
        setImage(res.data.image)
    })
        .catch(error => {
        console.log('Oops', error);
    })
}
},[id])

const cancel= ()=>{
    navigate("/android");
    }


        return (
            <div>
                <br></br> 
               <div className="container">
                   <div className="row">
                      <div className="card col-md-7 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Model</h3>
                         
                          <div className="card-body">
                              <form>  
                                  <div className="form-group mb-2">
                                      <label>Android ID: </label>
                                      <input readOnly placeholder="id" name="id" className="form-control"
                                         value={ide} onChange={(e)=>setIde(e.target.value)} />
                                   </div>   
                                   <div className="form-group mb-2">
                                      <label>Brand: </label>
                                <input placeholder="Brandname" name="brand" className="form-control"
                                value={brandname} onChange={(e)=>setBrandname(e.target.value)} />
                                </div>   
                                <div className = "form-group mb-2">
                                <label> Apps: </label>
                                <input placeholder="Apps" name="apps" className="form-control"
                                 value={apps} onChange={(e)=>setApps(e.target.value)} />    
                                 </div>   
                                <div className = "form-group mb-2">
                                 <label>Cost: </label>
                                <input placeholder="Cost" name="cost" className="form-control"
                                 value={cost} onChange={(e)=>setCost(e.target.value)} />    
                                 </div>   
                                 <div className = "form-group mb-2">
                                <label> Service Provider: </label>
                                <input placeholder="Serviceprovider" name="serviceprovider" className="form-control"
                                 value={serviceprovider} onChange={(e)=>setServiceprovider(e.target.value)} />    
                                </div> 
                                <div className = "form-group mb-2">
                                <label> Type: </label>
                                <input placeholder="Servicetype" name="servicetype" className="form-control"
                                 value={servicetype} onChange={(e)=>setServicetype(e.target.value)}  />    
                               </div>  
                               
                                 <div className="form-group">
                                 <label>Photos: </label>
                                 <input placeholder=" picture" name="" className="form-control"
                                 value={image} onChange={(e)=>setImage(e.target.value)}  />    
                                </div>   
                                    <button className="btn btn-success" onClick={(e)=>saveAndroidModel(e)}> Save </button>
                                    <button className="btn btn-danger" onClick={(e)=>cancel(e)}> Cancel </button> 
                                    <a href="/android" className="btn btn-info">Back to List</a>
                                                 
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
            
        );
        
        }
export default AddAndroidModel;