import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";




const Home = () => {
    const [resource, setResource] = useState({
        option:'people',
        id:''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setResource({...resource, [e.target.name]: e.target.value});
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // When the user clicks the submit input in the form, 
        //we will navigate to the "/results" path
        navigate(`/${resource.option}/${resource.id}/`);
        
    }

    return (
        <div className='container text-center'>
            <h1>Star Wars API Explorer</h1>
            <form onSubmit={handleSearch}>
                <label className='m-2'>Search for: </label>
                <select 
                    name='option'
                    value={resource.option}
                    onChange={handleChange}>
                        <option value='people'>People</option>
                        <option value='planets'>Planet</option>
                        <option value='starships'>Starship</option>
                </select>
                <label className='m-2'>ID: </label>
                <input type='number'name='id' value={resource.id} onChange={handleChange} />
                <button type='submit' className='btn btn-success m-5'>Search</button>
            </form>
        </div>
    );
}

export default Home;