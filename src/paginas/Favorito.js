import React, {useState, useEffect} from 'react';
import MainPageLayout from '../componentes/MainPageLayout';
import ShowGrid from '../componentes/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Favorito = () => {
    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(starred && starred.length > 0){
            const promises = starred.map(showId => apiGet(`/shows/${showId}`));

            Promise.all(promises)
            .then(apiData => apiData.map(show => ({ show })))
            .then(results => {
                setShows(results);
                
                setIsLoading(false);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            });
        }else{
            setIsLoading(false);
        }
    }, [starred])
    
    return (
        <MainPageLayout>
            {isLoading && <div>Shows are still loading</div>}
            {error && <div>Error ocurred: {error}</div>}
            {!isLoading && !shows && <div>No shows were added</div>}
            {!isLoading && !error && shows && <ShowGrid data={shows}/>}
        </MainPageLayout>
    );
};

export default Favorito;
