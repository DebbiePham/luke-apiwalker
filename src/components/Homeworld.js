import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Homeworld = ({ url }) => {
    const [homeworld, setHomeworld] = useState({});

        useEffect(() => {
            axios
                .get(url)
                .then(response => {
                    setHomeworld(response.data);
                })
                .catch(console.log)
        }, [url]);


    const getHomeWorldId = () => {
        if (homeworld.url) {
            const url = homeworld.url;
            let i = url.length-2;
            let HwId = '';

            while (url[i] !== '/') {
                HwId = url[i] + HwId;
                i--;
            }
            return HwId;
        }
    };

    return (
        <div>
            <p>
                <span className='fw-bold fs-larger'>Homeworld: </span>
                <Link to={'/planets/' + getHomeWorldId() + '/'}>{homeworld.name}</Link>
            </p>
        </div>
    );

};

export default Homeworld;