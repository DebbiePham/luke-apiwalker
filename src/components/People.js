import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Homeworld from './Homeworld';




const People = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    // Initialize charcter as null
    // const [error, setError] = useState(null);
    //  Add error state
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            // Set charcter data when the API request is successful
            .then((response) => { setCharacter(response.data); })
            .catch(() => navigate('/error'));

    }, [id, navigate]);
    //  Use 'id' as a dependency


    
    // Conditional rendering to handle the case when character is null
    if (!character) {
        return <p>Loading....</p>;
    }


    return (
        <div class="container">
            <div className='card shadow'>
                <div className='card-body'>
                    <h3>{character.name}</h3>
                    <Homeworld url={character.homeworld} />
                    <p><span className='fw-bold fs-larger'>Height: </span>{character.height}</p>
                    <p><span className='fw-bold fs-larger'>Mass: </span>{character.mass}</p>
                    <p><span className='fw-bold fs-larger'>Hair Color: </span>{character.hair_color}</p>
                    <p><span className='fw-bold fs-larger'>Skin Color: </span>{character.skin_color}</p>
                </div>
            </div>
        </div>
    );
};

export default People;