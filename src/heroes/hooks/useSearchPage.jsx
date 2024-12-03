import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const useSearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigationQuery = queryString.parse(location.search);
    const { id = '' } = navigationQuery;
    const heroes = getHeroesByName(id);
    const totalMarvel = heroes.filter( hero => hero.publisher === 'Marvel Comics' ).length;
    const totalDC = heroes.filter( hero => hero.publisher === 'DC Comics' ).length;
    
    const { heroId, onInputChange } = useForm({
        heroId: id
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(heroId.trim().length === 0) return navigate(`/search`);
        if(heroId.trim().length <= 1) return;
        navigate(`/search?id=${ heroId }`);
    }
    
    const resultsPublisher = ( publisher = '' ) =>
    {
        return (
            <div className="row row-cols-1 my-2">
                <div className="col">
                    <h4>Results { publisher }</h4>
                    <hr />
                </div>
                {
                    heroes.map( hero => (
                        (hero.publisher === publisher) && <HeroCard key={ hero.id } { ...hero } />
                    ))
                }
            </div>
        )
    }
    
    const resultMessage = ( message = '', type = 'primary') =>
    {
        return (
            <div className={`alert alert-${ type } animate__animated animate__fadeIn`}>
                { message }
            </div>
        )
    }

    return {
        id,
        heroId,
        onInputChange,
        handleSubmit,
        heroes,
        totalMarvel,
        totalDC,
        resultsPublisher,
        resultMessage
    }
}

