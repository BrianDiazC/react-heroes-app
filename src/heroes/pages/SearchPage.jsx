import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError = (heroes.length === 0 && q.length > 0);

  const { onInputChange, searchText, onResetForm } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5 ">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              onClick={onSearchSubmit}
            />
            <button className="btn btn-outline btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7  ">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '') 
            ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) && 
            <div className="alert alert-danger">No heroes with <b>{q}</b> </div>                       
          } */}

          <div 
            className="alert alert-primary animate__animated animate__lightSpeedInLeft" 
            style={{display: showSearch ? '' : 'none'}}
          >
            Search a hero
          </div>

          <div 
            className="alert alert-danger animate__animated animate__lightSpeedInRight" 
            style={{display: (showError) ? '' : 'none'}}
          > No heroes with <b>{q}</b> </div> 

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
