import { Link } from "react-router-dom"


const CharactesByHero = ({alter_ego, characters}) =>{
    if(alter_ego === characters) return (<></>);
    return ( <p>{characters}</p>)
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance ,
}) => {
    const heroImageUrl = `/heroes/${ id }.jpg`

const styles = {
    width: '100%'
}
  return (
    <div className="col-12  animate__animated animate__fadeIn">
        <div className="card bg-light shadow-sm ">
            <div className="row no-gutter flex-grow-1">
                <div className="col-4 img-top " style={styles}>
                    <img src={heroImageUrl} alt={superhero} className="card-img img-thumbnail"/>
                </div>
                <div className="col-12">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                          
                          <CharactesByHero characters={characters}  alter_ego={alter_ego}/>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link className="align-self-end" to={`/hero/${id}`}>
                              <button className="btn btn-outline-primary ">
                              Más...
                              </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

