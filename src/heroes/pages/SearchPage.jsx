import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

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


    return (
        <div className="mt-5">
            <h1>Search hero by name</h1>
            <hr />

            <div className="row row-cols-1 row-cols-2">
                <div className="col">
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="heroId"
                            autoCapitalize="off"
                            autoComplete="off"
                            value={ heroId }
                            onChange={ onInputChange }
                            />
                        <button 
                            type="submit" 
                            className="btn mt-2 btn-block btn-outline-primary form-control"
                            >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col">
                    {
                        id === '' ? resultMessage('Search a hero', 'info') :
                        (heroes.length === 0 && id !== '') ? resultMessage(`There's no hero with ${ id } name`, 'danger') :
                        heroes.length > 0 && id !== '' && (
                            <>
                                {
                                    (totalDC > 0) && 
                                    resultsPublisher('DC Comics')
                                }
                                {
                                    (totalMarvel > 0) && 
                                    resultsPublisher('Marvel Comics')
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
