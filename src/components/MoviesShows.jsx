import { Component } from "react"
import { Carousel, Col, Container, Spinner, Row } from "react-bootstrap"

class MoviesShows extends Component {
  state = {
    movies: [],
    isLoading: true
  }

  moviesFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=712dba3e&s=" +
          this.props.movie
      )

      if (response.ok) {
        let data = await response.json()
        this.setState({ movies: data.Search, isLoading: false })
      } else {
        alert("Something went wrong :(")
        this.setState({ isLoading: false })
      }
    } catch (error) {
      alert(error)
      this.setState({ isLoading: false })
    }
  }

  componentDidMount = () => {
    this.moviesFetch()
  }

  render() {
    return (
      <Container fluid>
        {this.state.isLoading && (
          <Spinner animation="border" variant="warning" />
        )}
        <h4 className="d-flex my-3 movie-title">{this.props.movie}</h4>
        <Carousel indicators={false} className="my-2">
          <Carousel.Item>
            <Row className="d-flex justify-content-center ">
              {this.state.movies
                .filter((movie, index) => index < 5)
                .map((movie) => (
                  <Col md={2} key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="carousel-img-style"
                    />
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex justify-content-center ">
              {this.state.movies
                .filter((movie, index) => index < 12 && index >= 5)
                .map((movie) => (
                  <Col md={2} key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="carousel-img-style"
                    />
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
export default MoviesShows
