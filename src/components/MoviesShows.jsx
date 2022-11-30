import { useEffect, useState } from "react"
import { Carousel, Col, Container, Spinner, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const MoviesShows = ({ movie }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const moviesFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=712dba3e&s=" + movie
      )

      if (response.ok) {
        let data = await response.json()
        setMovies(data.Search)
        setIsLoading(false)
      } else {
        alert("Something went wrong :(")
        setIsLoading(false)
      }
    } catch (error) {
      alert(error)
      setIsLoading(false)
    }
  }

  const navigate = useNavigate()

  useEffect(() => {
    moviesFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid>
      {isLoading && <Spinner animation="border" variant="warning" />}
      <h4 className="d-flex my-3 movie-title">{movie}</h4>
      <Carousel indicators={false} className="my-2">
        <Carousel.Item>
          <Row className="d-flex justify-content-center ">
            {movies
              .filter((movie, index) => index < 5)
              .map((movie) => (
                <Col md={2} key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="carousel-img-style"
                    onClick={() => navigate("/details/" + movie.imdbID)}
                  />
                </Col>
              ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center ">
            {movies
              .filter((movie, index) => index < 12 && index >= 5)
              .map((movie) => (
                <Col md={2} key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="carousel-img-style"
                    onClick={() => navigate("/details/" + movie.imdbID)}
                  />
                </Col>
              ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
export default MoviesShows
