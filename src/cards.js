import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import React from 'react';
import './Cards.css';


function Cards() {
  return (
    <CardGroup class="CardGroup">
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="popcorn" height="200px" />
        <Card.Body>
          <Card.Title>Pop Corn</Card.Title>
          <Card.Text>
           Get your Fresh pop corn at this location.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pizza" height="200px"/>
        <Card.Body>
          <Card.Title>Pizza</Card.Title>
          <Card.Text>
           Yummy pizza.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/9304021/pexels-photo-9304021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hotdog" height="200px" />
        <Card.Body>
          <Card.Title>Hot Dogs</Card.Title>
          <Card.Text>
           Hot dogs,chilli dogs so good.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;