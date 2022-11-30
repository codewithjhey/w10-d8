import MoviesShows from "./MoviesShows"
import NavBarDown from "./NavBarDown"
import Cover from "./Cover"

const Home = () => {
  return (
    <>
      <NavBarDown />
      <Cover />
      <MoviesShows movie="Twilight" />
      <MoviesShows movie="Terminator" />
      <MoviesShows movie="The Matrix" />
    </>
  )
}

export default Home
