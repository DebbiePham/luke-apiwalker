import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Starships = () => {
    const {id} = useParams();
    const [starship, setStarship] = useState(null);
    
    //  Add error state
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then((response) => { setStarship(response.data); })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    // Conditional rendering to handle the case when starship is null
    if (!starship) {
        return <p>Loading....</p>;
    }



    return (
        <div class="container">
            <div className='card shadow'>
                <div className='card-body'>
                    <h3>{starship.name}</h3>
                    <p><span className='fw-bold fs-larger'>Model: </span>{starship.model}</p>
                    <p><span className='fw-bold fs-larger'>Manufacturer: </span>{starship.manufacturer}</p>
                    <p><span className='fw-bold fs-larger'>Consumables: </span>{starship.consumables}</p>
                    <p><span className='fw-bold fs-larger'>Starship Class: </span>{starship.starship_class}</p>
                </div>
            </div>
        </div>
    )
}

export default Starships;