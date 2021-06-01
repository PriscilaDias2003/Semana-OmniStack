import React, {useState} from 'react';

import './styles.css';

import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import {Link, useHistory} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

export default function NewIncidents(){
    
    const [title, setTitle] = useState('');
    const [descreption, setDescreption] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');



    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            descreption,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        }catch (err){
            alert('Erro ao cadastrar novo caso, tente novamente.')
        }
    }

    return(
        <div className = "new-incidents-conteiner ">
           <div className = "content">
               <section>
                    <img src = {logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className = "back-link" to="/profile" >
                        <FiArrowLeft className="svg" size={16} color="#E02041"/>
                    
                        Voltar para home
                    </Link>
               </section>
               <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={descreption}
                        onChange={e => setDescreption(e.target.value)}
                    />
  
                  <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>
       </div>
    );
}