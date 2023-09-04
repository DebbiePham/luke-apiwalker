import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Planets = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState(null);
    // const [error, setError] = useState(null);
    //  Add error state
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => { setPlanet(response.data); })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    // Conditional rendering to handle the case when planet is null
    if (!planet) {
        return <p>Loading....</p>;
    }



    return (
        <div class="container">
            <div className='card shadow'>
                <div className='card-body'>
                    <h3>{planet.name}</h3>
                    <p><span className='fw-bold fs-larger'>Climate: </span>{planet.climate}</p>
                    <p><span className='fw-bold fs-larger'>Terrain: </span>{planet.terrain}</p>
                    <p><span className='fw-bold fs-larger'>Surface Water: </span>{planet.surface_water}</p>
                    <p><span className='fw-bold fs-larger'>Population: </span>{planet.population}</p>
                </div>
            </div>
        </div>
    )
}

export default Planets;