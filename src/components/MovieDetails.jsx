import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  //   const navigate = useNavigate()

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=712dba3e&i=" + params.movieId
      )

      let data = await response.json()
      setMovie(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      {movie && (
        <div className=" card align-content-center">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img
                className="image-details"
                src={movie.Poster}
                alt={movie.Title}
              />
            </Col>
            <Col sm={12} md={6} lg={8}>
              <div className="card-body">
                <h3 class="card-title">{movie.Title}</h3>
                <p> Actors: {movie.Actors}</p>
                <p> Duration: {movie.Runtime}</p>
                <p className="card-text">{movie.Plot}</p>
                <p className="card-text">{movie.Released}</p>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  )
}

export default MovieDetails
