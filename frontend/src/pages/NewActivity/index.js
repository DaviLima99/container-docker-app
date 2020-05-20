import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar';

import api from '../../services/api';

export default function Home() {
    const [description, setDescription] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await api.post('activity', {
                description
            });
            
            history.push('/');
        } catch (error) {
            alert('Erro a cadastrar atividade, tente novamente');
        }

    }

    return (
        <>
            <Navbar/>
            <div className="container d-flex justify-content-center">
                
                <div className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="form-control" placeholder="Nome da atividade"/>
                        </div>
                        <div className="form-group">
                            <Link to='/' className="btn btn-danger mr-2">Cancelar</Link>
                            <button className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}