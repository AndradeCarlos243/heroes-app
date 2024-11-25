import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

    const { id } = useParams();
    const hero = useMemo( () => getHeroById(id), [id] );
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    if(!hero){
        return <Navigate to="/" />
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 mt-5">
            <div className="col animate__animated animate__fadeInLeft animate__faster">
                <img src={`/assets/heroes/${hero.id}.jpg`} alt={ hero.superhero } className="img-thumbnail" />
            </div>
            <div className="col animate__animated animate__fadeInRight animate__faster">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
                    <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
                </ul>
                <hr />
                <h5 className='mt-3'>Characters</h5>
                <p>{ hero.characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleBack }
                    >
                        Volver atrás
                </button>
            </div>
        </div>
    )
}
