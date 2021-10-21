import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

export default function FomWithCustomHook() {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        pass: ''
    });

    const{name,email,pass} = formValues;

    useEffect(() => {
       console.log("email Cambió!")
    }, [email])

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
           <h1>FormWithCustomHook</h1>
           <hr />

            <div className="form-group">
                <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
            </div>      

            <div className="form-group">
                <input 
                type="text" 
                name="email" 
                className="form-control" 
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
            </div> 

            <div className="form-group">
                <input 
                type="password" 
                name="pass" 
                className="form-control" 
                placeholder="****"
                autoComplete="off"
                value={pass}
                onChange={handleInputChange}
                />
            </div>  

            <button type="submit" className="btn btn-primary"> Guardar</button>

        </form>
    )
}
