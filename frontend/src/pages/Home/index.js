import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';

import api from '../../services/api';

export default function Home() {
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
        api.get('activity').then(response => {
            setActivities(response.data);
        })
    });

    return (
        <>
            <Navbar/>
            <div className="container">
                <Link to='/create' className="btn btn-primary mt-5">Cadastrar + </Link>
                <table className="table table-striped mt-5">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descrição</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map(activity => (
                            <tr>
                                <th scope="row">{activity.id}</th>
                                <td>{activity.description}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}