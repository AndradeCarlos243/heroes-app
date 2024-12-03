import { Navbar } from "../../ui";
import { Routes, Route } from "react-router-dom";
import { DCPage, MarvelPage, SearchPage, HeroPage, NotFoundPage } from "../pages";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />}  />
                    <Route path="/*" element={<NotFoundPage/>} />
                </Routes>
            </div>
            
        </>
    )
}
