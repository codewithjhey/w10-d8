import { Component } from "react"
import { Carousel, Row } from "react-bootstrap"

class ActionShows extends Component {
  render() {
    return (
      <div className="m-2">
        <h5 className="text-left text-light mt-2 mb-2">Action</h5>
        <Carousel>
          <Carousel.Item>
            <Row></Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row></Row>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default ActionShows
