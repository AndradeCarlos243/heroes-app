import { useSearchPage } from "../hooks";

export const SearchPage = () => {
    const { id, heroId, onInputChange, handleSubmit, heroes, totalMarvel, totalDC, resultsPublisher, resultMessage } = useSearchPage();
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
