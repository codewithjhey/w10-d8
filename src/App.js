import "./App.css"
import "./components/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBarTop from "./components/NavBarTop"
import MyFooter from "./components/MyFooter"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import TVShows from "./components/TVShows"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarTop />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MovieDetails />} path="/details/:movieId"></Route>
          <Route element={<TVShows />} path="/tv-shows"></Route>
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
