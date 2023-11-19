import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id} =  useParams();


  const hero = useMemo(() => getHeroById(id), [id]);

  const heroImageUrl = `/heroes/${ id }.jpg`;

  const navigate = useNavigate();
  const onNavigateBack = ()=>{
    navigate(-1);
  }

  if(!hero){
  return <Navigate to='/marvel'/>
  }

  return (
  <div className="row animate__animated animate__fadeInRight">
    <div className="col-6 col-md-6">
      <img 
        src={heroImageUrl}
        alt={hero.superhero}
        className="img-thumbnail"
        />
    </div>
    <div className=" col-6 col-md-6">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
      <li className="list-group-item"> <b>Alter ego:</b>{hero.alter_ego}</li>
      <li className="list-group-item"> <b>Publisher:</b>{hero.publisher}</li>
      <li className="list-group-item"> <b>First Appearance:</b>{hero.first_appearance}</li>
      </ul>
      <h5 className="mt-3">Characters</h5>
      <p>{hero.characters}</p>

      <button 
        className="btn btn-outline-primary"
        onClick={onNavigateBack}
      >
        Back
      </button>
    </div>
  </div>
  )
}
