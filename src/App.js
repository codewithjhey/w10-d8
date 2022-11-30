import "./App.css"
import "./components/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBarTop from "./components/NavBarTop"
import MoviesShows from "./components/MoviesShows"
import MyFooter from "./components/MyFooter"
import NavBarDown from "./components/NavBarDown"

function App() {
  return (
    <div className="App">
      <NavBarTop />
      <NavBarDown />
      <MoviesShows movie="Twilight" />
      <MoviesShows movie="Terminator" />
      <MoviesShows movie="The Matrix" />
      <MyFooter />
    </div>
  )
}

export default App
