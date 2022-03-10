// import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AndroidServices from '../AndroidServices';


const ListAndroidModels = () => {
    const [androids, setAndroids] = useState([]);


    useEffect(() => {
        AndroidServices.getAndroids()
            .then((res) => {
                console.log(res.data);
                setAndroids(res.data);
            })
            .catch(error => {
                console.log('Oops', error);
            })


    }, []);

    const deleteAndroid = (id) => {

        AndroidServices.deleteAndroid(id)
            .then((res) => {
                setAndroids(androids.filter((a) => id !== a.id))
                console.log('Model deleted successfully', res.data);

            })
            .catch(error => {
                console.log('Oops', error);
            })
    }


    return (
        <div className="container">
            <h2 className="text-center"> ANDROIDS LIST</h2>
            <div>
                <Link className="btn btn-primary mb-2" to={"/add-android"}> Add Model</Link>
            </div>
            <div>
                <p></p>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Id</th>
                            <th> Brand</th>
                            <th> Apps </th>
                            <th> Service Provider</th>
                            <th> Service Type </th>
                            <th> Cost </th>


                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            androids.map(
                                android =>
                                    <tr key={android.id}>
                                        <td>{android.id}</td>
                                        <td>{android.brandname}</td>
                                        <td>{android.apps}</td>
                                        <td>{android.serviceprovider}</td>
                                        <td>{android.servicetype}</td>
                                        <td>{android.cost}</td>



                                        <td> <Link id="buttons" className="btn btn-primary" to={`/android/edit/${android.id}`}>Update</Link>
                                            <Link id="buttons" className="btn btn-primary" to={`/view-android/${android.id}`}>View</Link>
                                            <button id="buttons" className="btn btn-danger" onClick={() => 
                                                    deleteAndroid(android.id)
                                            }> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    {androids.map(android =>
                        <img src={android.image} key={android.id} alt=" " height={100} width={100} />

                    )}
                </div>
            </div>

        </div>
    );
}

export default ListAndroidModels;