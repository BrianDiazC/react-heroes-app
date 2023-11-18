import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>

        <div className="container p-3">

        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DcPage/>}/>
       
            {/* Search, Hero by id */}
            <Route path="search" element={<SearchPage/>}/>
            <Route path="hero/:id" element={<HeroPage/>}/>

            <Route path="/" element={<Navigate to={'marvel'}/>}/>
        </Routes>
        </div>

        
    </>
  )
}
